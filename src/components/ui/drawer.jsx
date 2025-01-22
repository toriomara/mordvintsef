"use client";

import * as React from "react";
import { Drawer as DrawerPrimitive } from "vaul";
import { cn } from "@/lib/utils";

const DrawerContext = React.createContext({});

const Drawer = ({ shouldScaleBackground = true, ...props }) => (
  <DrawerContext.Provider value={{ direction: props.direction }}>
    <DrawerPrimitive.Root
      shouldScaleBackground={shouldScaleBackground}
      preventScrollRestoration={false}
      {...props}
    />
  </DrawerContext.Provider>
);
Drawer.displayName = "Drawer";

const DrawerTrigger = DrawerPrimitive.Trigger;

const DrawerPortal = DrawerPrimitive.Portal;

const DrawerClose = DrawerPrimitive.Close;

const DrawerOverlay = ({ className, ...props }) => (
  <DrawerPrimitive.Overlay
    className={cn("fixed inset-0 z-50 bg-black/80", className)}
    {...props}
  />
);
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

const DrawerContent = ({ className, children, ...props }) => {
  const { direction } = React.useContext(DrawerContext);
  return (
    <DrawerPortal>
      <DrawerOverlay />
      <DrawerPrimitive.Content
        className={cn(
          "fixed z-50 flex flex-col mx-auto bg-background bottom-0 top-0 right-0",
          (!direction || direction === "bottom") && "inset-x-0 bottom-0",
          direction === "right" && "top-0 right-0",
          className
        )}
        {...props}
      >
        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  );
};
DrawerContent.displayName = "DrawerContent";

const DrawerHeader = ({ className, ...props }) => (
  <div
    className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)}
    {...props}
  />
);
DrawerHeader.displayName = "DrawerHeader";

const DrawerFooter = ({ className, ...props }) => (
  <div
    className={cn("mt-auto flex flex-col gap-2 p-4", className)}
    {...props}
  />
);
DrawerFooter.displayName = "DrawerFooter";

const DrawerTitle = ({ className, ...props }) => (
  <DrawerPrimitive.Title
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
);
DrawerTitle.displayName = DrawerPrimitive.Title.displayName;

const DrawerDescription = ({ className, ...props }) => (
  <DrawerPrimitive.Description
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
);
DrawerDescription.displayName = DrawerPrimitive.Description.displayName;

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
};
