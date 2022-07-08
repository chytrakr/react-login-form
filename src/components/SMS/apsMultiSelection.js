import * as React from "react";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function FixedTags(props) {
  const fixedOptions = [];
  const [value, setValue] = React.useState([]);
    function handleInputChange(e, input) {
        console.log(input)
    }
    function onChange(values) {
      props.onChange({target: {name: "users", value: values}})
    }
  return (
    <Autocomplete
      multiple
      id="fixed-tags-demo"
      value={value}
      onChange={(event, newValue) => {
        onChange(newValue);
        setValue([
          ...fixedOptions,
          ...newValue.filter((option) => fixedOptions.indexOf(option) === -1),
        ]);
      }}
      onInputChange={(e, value) => handleInputChange(e, value)}
      blurOnSelect
      options={top100Films}
      getOptionLabel={(option) => option.title}
      renderTags={(tagValue, getTagProps) =>
        tagValue.map((option, index) => (
          <Chip label={option.title} {...getTagProps({ index })} />
        ))
      }
      style={{ width: "100%" }}
      limitTags={3}
      loading
      filterSelectedOptions
      disablePortal
      renderInput={(params) => (
        <TextField
          sx={{
            "& legend": { display: "none" },
            "& fieldset": { top: 0 },
          }}
          {...params}
        />
      )}
    />
  );
}

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
];
