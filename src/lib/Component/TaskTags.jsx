import * as React from "react";
import Chip from "@mui/material/Chip";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

const filter = createFilterOptions();

export default function Tags({
  handleSelectedTaskTags,
  taskInfo,
  selectedTaskTags,
}) {
  return (
    <>
      <Autocomplete
        value={selectedTaskTags}
        multiple
        id="tags-outlined"
        options={taskInfo.map((option) => option.title)}
        freeSolo
        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          const { inputValue } = params;
          // Suggest the creation of a new value
          const isExisting = options.some(
            (option) => inputValue === option.title
          );
          if (inputValue !== "" && !isExisting) {
            filtered.push({
              inputValue,
              title: `Add "${inputValue}"`,
            });
          }
          return filtered;
        }}
        renderTags={(value, getTagProps) => {
          return value.map((option, index) => {
            if (typeof option === "string") {
              return (
                <Chip
                  variant="outlined"
                  label={option}
                  {...getTagProps({ index })}
                />
              );
            }
            return (
              <Chip
                variant="outlined"
                label={option.inputValue}
                {...getTagProps({ index })}
              />
            );
          });
        }}
        getOptionLabel={(option) => {
          // Value selected with enter, right from the input
          if (typeof option === "string") {
            return option;
          }
          // Add "xxx" option created dynamically
          if (option.inputValue) {
            return option.inputValue;
          }
          // Regular option
          return option.title;
        }}
        renderOption={(props, option) => {
          if (typeof option === "string") {
            return <li {...props}>{option}</li>;
          }
          return <li {...props}>{option.title}</li>;
        }}
        sx={{ margin: "5px", width: "100%" }}
        onChange={handleSelectedTaskTags}
        renderInput={(params) => <TextField {...params} label="TaskTags" />}
      />
    </>
  );
}
