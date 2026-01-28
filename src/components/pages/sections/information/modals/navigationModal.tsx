import type { JSX } from "react";
import type React from "react";
import Modal from "src/components/base/modal";

const NavigationModal: React.FC = (): JSX.Element => {
  return (
    <Modal title="لطفا شعبه مورد نظر خود را انتخاب کنید">
      <div className="bg-white p-4 rounded-lg shadow-lg w-64">
        <h3 className="text-lg font-bold mb-4">انتخاب شعبه</h3>
        <ul>
          <li className="py-2 border-b cursor-pointer">شعبه شهرک غرب</li>
          <li className="py-2 border-b cursor-pointer">شعبه شهرک ونک</li>
          <li className="py-2 border-b cursor-pointer">شعبه شهرک نیاوران</li>
          <li className="py-2 border-b cursor-pointer">شعبه شهرک تجریش</li>
        </ul>
      </div>
    </Modal>
  );
};

export default NavigationModal;
