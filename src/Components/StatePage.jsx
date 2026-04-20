import { useState } from "react";
import { Container, Typography, Button } from "@mui/material";

function StatePage() {
  const [count, setCount] = useState(0);

  return (
    <Container sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h4">State Page</Typography>

      <Typography variant="h6" sx={{ mt: 2 }}>
        Count: {count}
      </Typography>

      <Button
        variant="contained"
        sx={{ mt: 2, mr: 1 }}
        onClick={() => setCount(count + 1)}
      >
        +
      </Button>

      <Button
        variant="outlined"
        sx={{ mt: 2 }}
        onClick={() => setCount(count - 1)}
      >
        -
      </Button>
    </Container>
  );
}

export default StatePage;