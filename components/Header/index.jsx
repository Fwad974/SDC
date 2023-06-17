import { useEffect, useState } from "react";
import Link from "next/link";

import { Button, Card, Grid, Typography } from "@mui/material";

const Header = () => {
  return (
    <Card
      sx={{
        margin: " 0 0 1rem",
      }}
    >
      <Grid container alignItems="center" justifyContent="space-between">
        <Typography variant="h6">
          <Link href="/">Voice Recognition</Link>
        </Typography>

        <Button
          color="primary"
          variant="contained"
          onClick={() => {
            localStorage.getItem("user") && localStorage.removeItem("user");
            window.location.reload();
          }}
        >
          {localStorage.getItem("user") ? (
            "Logout"
          ) : (
            <Link href="/login">Login</Link>
          )}
        </Button>
      </Grid>
    </Card>
  );
};

export default Header;