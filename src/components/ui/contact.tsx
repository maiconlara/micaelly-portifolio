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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { toast } from "sonner";

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

  const { mutate } = useMutation({
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
    <div
      id="contact"
      className="relative overflow-hidden min-h-screen w-full flex py-18 flex-col items-center justify-start bg-green-primary gap-18 "
    >
      <div className="flex flex-col gap-18 w-full h-full max-w-[1920px] items-center justify-center">
        <div className="flex flex-col w-full items-center justify-center gap-5 max-w-[86vw]">
          <div className="flex flex-row w-full items-center justify-center gap-2">
            <p className="text-white text-2xl uppercase  font-light font-clean cursor-default">
              Contato
            </p>
          </div>
        </div>

        <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  flex flex-col w-full max-w-[86vw] lg:max-w-[32vw]">
          <Form {...form}>
            <form
              className="flex w-full flex-col items-center gap-6 px-4 md:px-0 font-text"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <div className="grid w-full gap-4 grid-cols-1 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="flex w-full flex-col">
                      <FormControl>
                        <div className="flex w-full flex-col gap-1">
                          <span className="text-base text-white font-text">
                            Nome completo
                          </span>

                          <Input
                            id="name"
                            type="text"
                            autoComplete="off"
                            placeholder="Digite seu nome completo"
                            className="bg-white flex h-12 w-full border-none pl-4 rounded-[12px] shadow-none"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="flex w-full flex-col">
                      <FormControl>
                        <div className="flex w-full flex-col gap-1">
                          <span className="text-base text-white font-text">
                            Telefone
                          </span>

                          <MaskedInput
                            mask="(__) _____-____"
                            id="phone"
                            type="text"
                            autoComplete="off"
                            placeholder="Digite seu telefone"
                            className="bg-white flex h-12 w-full border-none pl-4 rounded-[12px] shadow-none"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
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
                      <div className="flex w-full flex-col gap-1">
                        <span className="text-base text-white font-text">
                          Email
                        </span>

                        <Input
                          id="email"
                          type="text"
                          autoComplete="off"
                          placeholder="Digite seu email"
                          className="bg-white flex h-12 w-full border-none pl-4 rounded-[12px] shadow-none"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="flex w-full flex-col">
                    <FormControl>
                      <div className="flex w-full flex-col gap-1">
                        <span className="text-base text-white font-text">
                          Mensagem
                        </span>

                        <Textarea
                          id="message"
                          {...field}
                          placeholder="Explique como posso ajudar você, estarei a disposição e responderei assim que possível."
                          className="rounded-[12px] text-text font-regular h-[142px] bg-white resize-none"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                disabled={false}
                className="bg-[#3e6133] h-12 w-full hover:bg-[#3e6133]/80 cursor-pointer transition-colors rounded-[12px]"
              >
                Enviar
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};
