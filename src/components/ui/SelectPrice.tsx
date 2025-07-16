import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import TippyHeadless from "@tippyjs/react/headless";
import { useContext, useState } from "react";
import "tippy.js/dist/tippy.css";
import { AppContext } from "../../context/AppContextProvider";
function SelectPrice() {
  const { minPrice, maxPrice, setMaxPrice, setMinPrice } = useContext(AppContext);
  const [visibleTippy, setVisibleTippy] = useState(false);
  // Giá trị nhập tạm từ input
  const [tempMin, setTempMinPrice] = useState<string>("");
  const [tempMax, setTempMaxPrice] = useState<string>("");

  const handleApply = () => {
    const min = tempMin.trim() !== "" ? Number(tempMin) : null;
    const max = tempMax.trim() !== "" ? Number(tempMax) : null;

    setMinPrice(min);
    setMaxPrice(max);
  };
  return (
    <div className="border border-gray-600 p-1 rounded-sm cursor-pointer">
      <TippyHeadless
        interactive
        visible={visibleTippy}
        onClickOutside={() => setVisibleTippy(false)}
        placement="bottom"
        render={(attrs) => (
          <div
            className="box bg-white w-[420px] shadow-gray-600 shadow rounded-md p-4 border border-black"
            tabIndex={-1}
            {...attrs}
          >
            <div className="flex items-center justify-center gap-4">
              <TextField
                label="Giá tối thiểu"
                size="small"
                onChange={(e) => setTempMinPrice(e.target.value)}
              />
              <TextField
                label="Giá tối đa"
                size="small"
                onChange={(e) => setTempMaxPrice(e.target.value)}
              />
            </div>
            <div className="flex item-cen justify-start mt-3">
              <Button variant="contained" size="small" onClick={handleApply}>
                Áp dụng
              </Button>
            </div>
          </div>
        )}
      >
        <div
          className="flex items-center justify-between"
          onClick={() => setVisibleTippy((prev) => !prev)}
        >
          <span className="text-lg">
            {minPrice || maxPrice
              ? `Từ ${minPrice?.toLocaleString() || "..."}đ → ${
                  maxPrice?.toLocaleString() || "..."
                }đ`
              : "-- Lựa chọn mức giá --"}
          </span>
        </div>
      </TippyHeadless>
    </div>
  );
}

export default SelectPrice;
