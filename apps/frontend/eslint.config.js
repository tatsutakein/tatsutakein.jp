import baseConfig from "@tatsutakeinjp/eslint-config/base";
import nextjsConfig from "@tatsutakeinjp/eslint-config/nextjs";
import reactConfig from "@tatsutakeinjp/eslint-config/react";

export default [...baseConfig, ...reactConfig, ...nextjsConfig];
