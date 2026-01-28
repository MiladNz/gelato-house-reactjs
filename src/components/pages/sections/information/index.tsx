import type React from "react";
import type { JSX } from "react";
import { Button } from "src/components/base/button";
import { ArrowDown } from "src/components/icons/ArrowDown";
import NavigationModal from "./modals/navigationModal";
import BranchModal from "./modals/branchModal";

const Information: React.FC = (): JSX.Element => {
  // 6.30
  return (
    <div className="flex justify-between">
      <div className="flex gap-2">
        <Button
          variant="contained"
          size="medium"
          color="info"
          icon={<ArrowDown />}>
          شعبه شهرک غرب
        </Button>
        <Button
          variant="contained"
          size="medium"
          color="info"
          icon={<ArrowDown />}>
          شعبه شهرک غرب
        </Button>
      </div>
      <div></div>
      {/* 10 */}
      <NavigationModal />
      <BranchModal />
    </div>
  );
};

export default Information;
