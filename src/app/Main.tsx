import { containerSx } from "@/common/styles";
import Container from "@mui/material/Container";

export const Main = () => {
  return (
    <main>
      <Container maxWidth={"lg"} sx={containerSx}>
        Main
      </Container>
    </main>
  );
};
