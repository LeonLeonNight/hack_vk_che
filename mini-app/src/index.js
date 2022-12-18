import React from "react";
import ReactDOM from "react-dom";
import {
  Avatar,
  Text,
  Title,
  AdaptivityProvider,
  ConfigProvider,
  AppRoot,
  SplitLayout,
  SplitCol,
  View,
  Panel,
  PanelHeader,
  Gradient,
  Header,
  Group,
  SimpleCell,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

import { Icon16Done, Icon16Down, Icon16Up } from "@vkontakte/icons";

const App = () => {

  const [direction, setDirection] = React.useState("top");

  const styles = {
    margin: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: 32,
  };

  if (direction === "bottom") {
    styles.borderRadius = "inherit";
  }

  return (
    <AppRoot>
      <SplitLayout header={<PanelHeader separator={false} />}>
        <SplitCol autoSpaced>
          <View activePanel="main">
            <Panel id="main">
              <PanelHeader>VKUI</PanelHeader>
              <Group>
                <Gradient mode="tint" to={direction} style={styles}>
                  <Avatar size={96} />
                  <Title
                    style={{ marginBottom: 8, marginTop: 20 }}
                    level="2"
                    weight="2"
                  >
                    Дмитрий Чуваков
                  </Title>
                  {/* <Text
                    style={{
                      marginBottom: 24,
                      color: "var(--vkui--color_text_secondary)",
                    }}
                  >
                    Учащийся
                  </Text> */}
                  {/* <Button size="m" mode="secondary">
                    Редактировать
                  </Button> */}
                  
                </Gradient>
              </Group>
            </Panel>
          </View>
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  );
};

ReactDOM.render(
  <ConfigProvider>
    <AdaptivityProvider>
      <App />
    </AdaptivityProvider>
  </ConfigProvider>,
  document.getElementById("root")
);