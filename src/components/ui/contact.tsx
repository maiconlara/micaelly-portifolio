"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { MaskedInput } from "@/components/ui/masked-input";
import { contactFormSchema } from "@/components/ui/schema";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

type Form = z.infer<typeof contactFormSchema>;

export const Contact = () => {
  const form = useForm<Form>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      phone: "",
    },
  });

  const SendEmailRequest = async (postData: Form) => {
    const { data } = await axios.post("/api/send", postData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return data;
  };

  const { mutate, isPending } = useMutation({
    mutationFn: SendEmailRequest,
    onSuccess: () => {
      toast.success(
        "Agora é só esperar, irei entrar em contato o mais breve possível!"
      );

      form.reset();
    },
    onError: (error: AxiosError) => {
      const { response } = error;
      if (!response) {
        toast.error(
          "Não se preocupe, o erro foi do nosso lado. Já fomos notificados e iremos trabalhar para corrigir."
        );

        return;
      }
      toast.error(
        "Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente mais tarde."
      );
    },
  });

  function onSubmit(data: Form) {
    mutate(data);
  }

  return (
    <section
      id="contact"
      aria-label="Contato"
      className="relative overflow-hidden w-full flex py-24 md:py-32 flex-col items-center justify-start bg-green-primary gap-12 md:gap-16"
    >
      <div className="flex flex-col gap-12 md:gap-16 w-full max-w-[1920px] items-center justify-start">
        <Reveal>
          <div className="flex flex-col items-center gap-6">
            <SectionHeader label="Contato" tone="white" />
            <p className="text-white/90 font-text text-sm md:text-base text-center max-w-[640px] leading-relaxed px-6">
              Vamos transformar seus momentos em memórias eternas. Envie sua
              mensagem e responderei em breve.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="w-full flex justify-center">
          <div className="w-full max-w-[86vw] lg:max-w-[560px]">
            <Form {...form}>
              <form
                className="flex w-full flex-col items-center gap-5 font-text"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <div className="grid w-full gap-4 grid-cols-1 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="flex w-full flex-col">
                        <FormControl>
                          <div className="flex w-full flex-col gap-1.5">
                            <span className="text-sm text-white/90 font-text font-light tracking-wide">
                              Nome completo
                            </span>
                            <Input
                              id="name"
                              type="text"
                              autoComplete="name"
                              placeholder="Digite seu nome completo"
                              className="bg-white flex h-12 w-full border-none pl-4 rounded-[12px] shadow-none"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage className="text-white" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem className="flex w-full flex-col">
                        <FormControl>
                          <div className="flex w-full flex-col gap-1.5">
                            <span className="text-sm text-white/90 font-text font-light tracking-wide">
                              Telefone
                            </span>
                            <MaskedInput
                              mask="(__) _____-____"
                              id="phone"
                              type="tel"
                              autoComplete="tel"
                              placeholder="Digite seu telefone"
                              className="bg-white flex h-12 w-full border-none pl-4 rounded-[12px] shadow-none"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage className="text-white" />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="flex w-full flex-col">
                      <FormControl>
                        <div className="flex w-full flex-col gap-1.5">
                          <span className="text-sm text-white/90 font-text font-light tracking-wide">
                            Email
                          </span>
                          <Input
                            id="email"
                            type="email"
                            autoComplete="email"
                            placeholder="Digite seu email"
                            className="bg-white flex h-12 w-full border-none pl-4 rounded-[12px] shadow-none"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage className="text-white" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="flex w-full flex-col">
                      <FormControl>
                        <div className="flex w-full flex-col gap-1.5">
                          <span className="text-sm text-white/90 font-text font-light tracking-wide">
                            Mensagem
                          </span>
                          <Textarea
                            id="message"
                            {...field}
                            placeholder="Explique como posso ajudar você, estarei à disposição e responderei assim que possível."
                            className="rounded-[12px] text-text font-regular h-[160px] bg-white resize-none border-none px-4 py-3"
                          />
                        </div>
                      </FormControl>
                      <FormMessage className="text-white" />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  disabled={isPending}
                  className="bg-[#3e6133] h-12 w-full hover:bg-[#3e6133]/90 cursor-pointer transition-colors rounded-[12px] text-white font-text font-medium tracking-wide disabled:opacity-70"
                >
                  {isPending ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="size-4 animate-spin" />
                      Enviando…
                    </span>
                  ) : (
                    "Enviar mensagem"
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
