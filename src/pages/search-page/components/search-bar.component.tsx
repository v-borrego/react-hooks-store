import * as React from "react";
import TextField from "@material-ui/core/TextField/TextField";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton/IconButton";
import { useStyles } from "./search-bar.style";

interface SearchBarProps {
  onSearch: (searchText: string) => void;
}

export const SearchBarComponent: React.FunctionComponent<SearchBarProps> = ({ onSearch }) => {
  const [searchText, setSearchText] = React.useState("");
  const classes = useStyles();
  return (
    <div>
      <TextField
        value={searchText}
        label="Repository topics"
        placeholder="Search github user by repositories topics"
        onChange={e => setSearchText(e.target.value)}
        classes={{ root: classes.inputText }}
      />
      <IconButton onClick={() => onSearch(searchText)}>
        <SearchIcon />
      </IconButton>
    </div>
  );
};
