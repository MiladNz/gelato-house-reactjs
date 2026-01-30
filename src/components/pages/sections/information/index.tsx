import type React from "react";
import { useState, type JSX } from "react";
import { Button } from "src/components/base/button";
import { ArrowDown } from "src/components/icons/ArrowDown";
import NavigationModal from "./modals/navigationModal";
import BranchModal from "./modals/branchModal";

const Information: React.FC = (): JSX.Element => {
  const [isBranchModalShow, setIsBranchModalShow] = useState<boolean>(false);
  const [isNavigationModalShow, setIsNavigationModalShow] =
    useState<boolean>(false);

  const closeModals = () => {
    setIsBranchModalShow(false);
    setIsNavigationModalShow(false);
  };

  return (
    <div className="flex justify-between">
      <div className="flex gap-2">
        <Button
          variant="contained"
          size="medium"
          color="info"
          icon={<ArrowDown />}
          onClick={() => setIsBranchModalShow(true)}>
          {/* 12.46 */}
          شعبه شهرک غرب
        </Button>
        <Button
          variant="contained"
          size="medium"
          color="info"
          icon={<ArrowDown />}
          onClick={() => setIsNavigationModalShow(true)}>
          شعبه شهرک غرب
        </Button>
      </div>
      <div></div>
      {isBranchModalShow && <BranchModal onClick={closeModals} />}
      {isNavigationModalShow && <NavigationModal onClick={closeModals} />}
    </div>
  );
};

export default Information;
