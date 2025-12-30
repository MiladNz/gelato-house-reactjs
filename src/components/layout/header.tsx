import type React from "react";
import { Button } from "../base/button";

export const Header: React.FC = () => {
  return (
    <header>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          console.log("Hello Dude");
        }}>
        کلیک کن
      </Button>
      <Button variant="outlined" color="primary">
        کلیک کن
      </Button>
      <Button variant="text" color="primary">
        کلیک کن
      </Button>
    </header>
  );
};
