import React, { useState } from "react";
import { IconPicker } from "react-fa-icon-picker";

export const IconPickerItem = () => {
  const [value, setValue] = useState("");

  return <IconPicker value={value} onChange={(v) => setValue(v)} />;
};
