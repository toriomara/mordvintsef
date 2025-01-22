import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import GoogleMap from "./GoogleMap";
import { TypographyH1 } from "./ui/TypographyH1";
import { TypographyH2 } from "./ui/TypographyH2";
import { TypographyH3 } from "./ui/TypographyH3";
import { TypographyH4 } from "./ui/TypographyH4";
import { TypographyLarge } from "./ui/TypographyLarge";
import { TypographyLead } from "./ui/TypographyLead";

export function DrawerMap() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Map Here</Button>
        </DialogTrigger>
        <DialogContent className="grid grid-rows-[20%_80%] sm:max-w-[425px] md:max-w-[85%] h-[75%]">
          <DialogHeader className="flex h-[100%]">
            <DialogTitle>
              <TypographyLarge>
                Адрес: 400005, г. Волгоград, ул. Коммунистическая, д.21, офис 46
              </TypographyLarge>
            </DialogTitle>
            <DialogDescription>
              <span>Понедельник-пятница, 9.00-17.00</span>
              <br />
              <span>+7 960 867 01 39 (приём звонков круглосуточно)</span>
            </DialogDescription>
          </DialogHeader>
          <div className="">
            <GoogleMap />
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen} direction="bottom">
      <DrawerTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DrawerTrigger>
      <DrawerContent className="grid grid-rows-[20%_70%_10%] w-[90%] h-[70%] items-center">
        <DrawerHeader className="text-left">
          <DrawerTitle>
            <TypographyLarge>
              Адрес: 400005, г. Волгоград, ул. Коммунистическая, д.21, офис 46
            </TypographyLarge>
          </DrawerTitle>
          <DrawerDescription>
            <span>Понедельник-пятница, 9.00-17.00</span>
            <br />
            <span>+7 960 867 01 39 (приём звонков круглосуточно)</span>
          </DrawerDescription>
        </DrawerHeader>
        <div className="w-[90%] h-[70%] mx-auto">
          <GoogleMap />
        </div>
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Закрыть</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
