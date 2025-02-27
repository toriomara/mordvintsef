"use client";

import React from "react";
import { TypographyH3 } from "./ui/TypographyH3";
import { Button } from "./ui/button";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    // Define a state variable to track whether is an error or not
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI

    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    // You can use your own error logging service here
    console.error({ error, errorInfo });
  }
  render() {
    // Check if the error is thrown
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="grid max-h-fit justify-center items-center gap-4">
          <TypographyH3>Ошибка загрузки</TypographyH3>
          <Button
            variant="outline"
            onClick={() => this.setState({ hasError: false })}
          >
            Ещё раз?
          </Button>
        </div>
      );
    }

    // Return children components in case of no error

    return this.props.children;
  }
}

export default ErrorBoundary;
