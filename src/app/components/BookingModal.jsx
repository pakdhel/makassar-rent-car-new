"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, MapPin, User } from "lucide-react";

const BookingModal = ({ isOpen, onClose, carName }) => {
  const [formData, setFormData] = useState({
    name: "",
    pickupDate: "",
    returnDate: "",
    pickupLocation: "",
    serviceType: "self-drive",
  });

  // Menghapus anotasi tipe (e: React.FormEvent)
  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
        Halo, saya ingin booking mobil:

        Nama: ${formData.name}
        Mobil: ${carName || "Belum dipilih"}
        Tanggal Ambil: ${formData.pickupDate}
        Tanggal Kembali: ${formData.returnDate}
        Lokasi Pickup: ${formData.pickupLocation}
        Tipe Layanan: ${formData.serviceType === "self-drive" ? "Lepas Kunci" : "Dengan Sopir"}

        Mohon info lebih lanjut. Terima kasih!
        `.trim();

    const encodedMessage = encodeURIComponent(message);

    const whatsappNumber = '6282192227779'; 

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose} >
      <DialogContent className="sm:max-w-[500px] rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">
            Book Your Car
          </DialogTitle>
          <p className="text-sm text-muted-foreground mt-2">
            Fill in the details below and we'll contact you via WhatsApp
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="flex items-center gap-2">
              <User className="w-4 h-4 text-accent" />
              Full Name
            </Label>
            <Input
              id="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="rounded-xl"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="pickupDate" className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-accent" />
                Pickup Date
              </Label>
              <Input
                id="pickupDate"
                type="date"
                value={formData.pickupDate}
                onChange={(e) => setFormData({ ...formData, pickupDate: e.target.value })}
                required
                className=""
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="returnDate" className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-accent" />
                Return Date
              </Label>
              <Input
                id="returnDate"
                type="date"
                value={formData.returnDate}
                onChange={(e) => setFormData({ ...formData, returnDate: e.target.value })}
                required
                className="rounded-xl"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="pickupLocation" className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-accent" />
              Pickup Location
            </Label>
            <Input
              id="pickupLocation"
              placeholder="e.g., Bandara Sultan Hasanuddin"
              value={formData.pickupLocation}
              onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
              required
              className="rounded-xl"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="serviceType">Service Type</Label>
            <Select
              value={formData.serviceType}
              // Di sini kita tidak menggunakan anotasi tipe pada value
              onValueChange={(value) => setFormData({ ...formData, serviceType: value })}
            >
              <SelectTrigger className="rounded-xl">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="self-drive">Self Drive (Lepas Kunci)</SelectItem>
                <SelectItem value="with-driver">With Driver (Dengan Sopir)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button type="submit" variant="accent" size="lg" className="w-full">
            Send to WhatsApp
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;