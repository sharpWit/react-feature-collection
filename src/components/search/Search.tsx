import { ChangeEvent, useState } from "react";

function Search() {
  const [username, setUsername] = useState("");
  const [validationMessage, setValidationMessage] = useState("");

  const handleBlur = () => {
    // Perform validation logic
    if (username.trim() === "") {
      setValidationMessage("Username cannot be empty!");
    } else {
      setValidationMessage("");
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  return (
    <div>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={handleChange}
        onBlur={() => console.log(handleBlur)}
      />
      {validationMessage && <p style={{ color: "red" }}>{validationMessage}</p>}
    </div>
  );
}

export default Search;
