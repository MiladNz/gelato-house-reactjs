import type React from "react";
import type { JSX } from "react";
import { Button } from "../button";
import { ArrowDown } from "src/components/icons/ArrowDown";
// import Modal from "../modal";
// import arrowDown from "../../../../public/assets/icons/arrow-down.png";

const Popup: React.FC = (): JSX.Element => {
  return (
    <div>
      <Button
        variant="contained"
        size="medium"
        color="info"
        icon={<ArrowDown />}>
        شعبه شهرک غرب
      </Button>
      {/* <Modal title="لطفا شعبه مورد نظر خود را انتخاب کنید">
        <div className="bg-white p-4 rounded-lg shadow-lg w-64">
          <h3 className="text-lg font-bold mb-4">انتخاب شعبه</h3>
          <ul>
            <li className="py-2 border-b cursor-pointer">شعبه شهرک غرب</li>
            <li className="py-2 border-b cursor-pointer">شعبه شهرک ونک</li>
            <li className="py-2 border-b cursor-pointer">شعبه شهرک نیاوران</li>
            <li className="py-2 border-b cursor-pointer">شعبه شهرک تجریش</li>
          </ul>
        </div>
      </Modal> */}
      {/* p18 ================================= 5.00 */}
    </div>
  );
};

export default Popup;
