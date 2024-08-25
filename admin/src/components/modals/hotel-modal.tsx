"use client";

import * as z from "zod";
import axios from "axios";

import { useState } from "react";
import { useHotelModal } from "@/hooks/use-hotel-modal";
import Modal from "../ui/modal";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import toast from "react-hot-toast";

const formSchema = z.object({
  name: z.string().min(1),
});

export const HotelModal = () => {
  const [loading, setLoading] = useState(false);

  const HotelModal = useHotelModal();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);
      const response = await axios.post("/api/hotels", values);
      console.log(response.data);
      toast.success("success create hotel");
      window.location.assign(`/${response.data.id}`);
    } catch (error) {
      toast.error("failed create hotel");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      title="Create Hotel"
      description="Add Hotel for create room and category"
      isOpen={HotelModal.isOpen}
      onClose={HotelModal.onClose}
    >
      <div>
        <div className="space-y-4 py-2 pb-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Name Hotel" {...field} disabled={loading} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="pt-6 space-x-2 flex items-center justify-end w-full">
                <Button disabled={loading} variant="outline" onClick={HotelModal.onClose}>
                  Cancel
                </Button>
                <Button disabled={loading} type="submit">
                  Continue
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </Modal>
  );
};
