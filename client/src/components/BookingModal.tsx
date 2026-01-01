import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CreditCard, Calendar, Clock, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const bookingSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Invalid phone number"),
  sessionType: z.enum(["1on1", "group"]),
  duration: z.enum(["30", "60"]),
});

export function BookingModal({ 
  isOpen, 
  onClose, 
  initialType = "1on1" 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  initialType?: "1on1" | "group" 
}) {
  const { toast } = useToast();
  const [step, setStep] = useState(1);

  const form = useForm<z.infer<typeof bookingSchema>>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      phone: "",
      sessionType: initialType,
      duration: "60",
    },
  });

  const onSubmit = (data: z.infer<typeof bookingSchema>) => {
    setStep(2); // Move to "payment"
  };

  const handlePayment = () => {
    // Mock payment processing
    setTimeout(() => {
      toast({
        title: "Booking Confirmed!",
        description: "Your $10 deposit has been processed. Check your email for details.",
      });
      setStep(1);
      onClose();
    }, 1500);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-zinc-900 border border-white/10 text-white sm:max-w-[500px] p-0 overflow-hidden" data-testid="modal-booking">
        <div className="bg-brand-red p-6 text-center">
          <h2 className="text-2xl font-heading font-bold uppercase italic text-white tracking-tighter">
            Secure Your Spot
          </h2>
          <p className="text-white/80 text-sm mt-1">
            Canyon Boxing Club
          </p>
        </div>
        
        <div className="p-6">
          {step === 1 ? (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase text-xs font-bold tracking-wider text-gray-400">Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Muhammad Ali" {...field} className="bg-zinc-800 border-white/10 text-white rounded-none focus:ring-brand-red" data-testid="input-booking-name" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase text-xs font-bold tracking-wider text-gray-400">Phone Number</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                          <Input placeholder="(555) 000-0000" {...field} className="pl-10 bg-zinc-800 border-white/10 text-white rounded-none focus:ring-brand-red" data-testid="input-booking-phone" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="sessionType"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel className="uppercase text-xs font-bold tracking-wider text-gray-400">Session Type</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-1"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="1on1" className="border-white/20 text-brand-red" data-testid="radio-booking-1on1" />
                              </FormControl>
                              <FormLabel className="font-normal text-white">1-on-1</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="group" className="border-white/20 text-brand-red" data-testid="radio-booking-group" />
                              </FormControl>
                              <FormLabel className="font-normal text-white">Group</FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="duration"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel className="uppercase text-xs font-bold tracking-wider text-gray-400">Duration</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-1"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="60" className="border-white/20 text-brand-red" data-testid="radio-booking-60min" />
                              </FormControl>
                              <FormLabel className="font-normal text-white">60 Minutes</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="30" className="border-white/20 text-brand-red" data-testid="radio-booking-30min" />
                              </FormControl>
                              <FormLabel className="font-normal text-white">30 Minutes</FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Button type="submit" className="w-full bg-white text-black hover:bg-gray-200 rounded-none uppercase font-bold tracking-widest py-6" data-testid="button-booking-submit">
                  Proceed to Deposit ($10)
                </Button>
              </form>
            </Form>
          ) : (
            <div className="space-y-6">
              <div className="bg-zinc-800 p-4 border border-white/5 rounded-sm">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-400 text-sm">Booking Deposit</span>
                  <span className="text-white font-bold">$10.00</span>
                </div>
                <div className="text-xs text-gray-500">
                  Required to secure your slot. Applied to final session fee.
                </div>
              </div>

              <div className="space-y-4">
                <Label className="uppercase text-xs font-bold tracking-wider text-gray-400">Card Details</Label>
                <div className="relative">
                  <CreditCard className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input 
                    placeholder="0000 0000 0000 0000" 
                    className="pl-10 bg-zinc-800 border-white/10 text-white rounded-none font-mono"
                    data-testid="input-payment-card"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="MM/YY" className="bg-zinc-800 border-white/10 text-white rounded-none text-center" data-testid="input-payment-expiry" />
                  <Input placeholder="CVC" className="bg-zinc-800 border-white/10 text-white rounded-none text-center" data-testid="input-payment-cvc" />
                </div>
              </div>

              <Button onClick={handlePayment} className="w-full bg-brand-orange hover:bg-orange-600 text-white rounded-none uppercase font-bold tracking-widest py-6" data-testid="button-payment-confirm">
                Pay $10.00 & Confirm
              </Button>
              <Button variant="ghost" onClick={() => setStep(1)} className="w-full text-gray-400 hover:text-white uppercase text-xs" data-testid="button-payment-back">
                Back to Details
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
