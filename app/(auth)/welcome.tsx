import Button from "@/components/Button";
import ScreenWrapper from "@/components/ScreenWrapper";
import Typo from "@/components/Typo";
import { colors } from "@/constants/theme";


const Welcome = () => {
  return (
    <ScreenWrapper style={{ backgroundColor : colors.neutral900 }}>
      <Typo color="white" fontWeight={'600'} size={16} style={{ textAlign:"center" }}  >
        Welcome
      </Typo>

      <Button onPress={() => {}}>
        <Typo fontWeight={'600'} size={16}>
            Login
        </Typo>
      </Button>

    </ScreenWrapper>
  );
};

export default Welcome;