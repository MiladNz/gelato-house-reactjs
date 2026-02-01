import type React from "react";
import { useState, type JSX } from "react";
import { Button } from "src/components/base/button";
import { ArrowDown } from "src/components/icons/ArrowDown";
import NavigationModal from "./modals/navigationModal";
import BranchModal from "./modals/branchModal";
import SvgHandBag from "src/components/icons/HandBag";
import SvgMotorCycle from "src/components/icons/MotorCycle";

const Information: React.FC = (): JSX.Element => {
  const [isBranchModalShow, setIsBranchModalShow] = useState<boolean>(false);
  const [isNavigationModalShow, setIsNavigationModalShow] =
    useState<boolean>(false);

  const closeModals = () => {
    setIsBranchModalShow(false);
    setIsNavigationModalShow(false);
  };

  return (
    <div className="flex justify-between py-12">
      <div className="flex gap-2 items-end">
        <div>
          <Button
            variant="contained"
            size="small"
            color="info"
            icon={<ArrowDown />}
            onClick={() => setIsBranchModalShow(true)}>
            {/* 12.46 */}
            شعبه شهرک غرب
          </Button>
        </div>

        <div>
          <Button
            variant="contained"
            size="small"
            color="info"
            icon={<ArrowDown />}
            onClick={() => setIsNavigationModalShow(true)}>
            شعبه شهرک غرب
          </Button>
        </div>
      </div>
      <div className="flex py-4 px-12 justify-between border border-gray-300 rounded-2xl">
        <div className="flex items-center gap-2">
          <SvgHandBag className="text-4xl" />
          <div>
            <h3>تا ۲۰ دقیقه</h3>
            <h4 className="text-gray-600 font-light text-md">تحویل حضوری</h4>
          </div>
        </div>
        <div className="w-[0.5px] h-full bg-gray-300 mx-2"></div>
        <div className="flex items-center gap-2">
          <SvgMotorCycle className="text-4xl" />
          <div>
            <h3>تا ۱۲۰ دقیقه</h3>
            <h4 className="text-gray-600 font-light text-md">ارسال با پیک</h4>
          </div>
        </div>
      </div>
      {isBranchModalShow && <BranchModal onClick={closeModals} />}
      {isNavigationModalShow && <NavigationModal onClick={closeModals} />}
    </div>
  );
};

export default Information;

//
