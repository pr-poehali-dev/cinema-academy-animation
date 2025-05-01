
import React from "react";
import { LucideProps } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";

interface IconProps extends Omit<LucideProps, "ref"> {
  name: keyof typeof dynamicIconImports | string;
  fallback?: keyof typeof dynamicIconImports;
}

const Icon = ({ name, fallback = "CircleAlert", ...props }: IconProps) => {
  const [icon, setIcon] = React.useState<React.FC<LucideProps>>();

  React.useEffect(() => {
    const loadIcon = async () => {
      try {
        const IconModule = await import(`lucide-react/dist/esm/icons/${name}.js`);
        setIcon(() => IconModule.default);
      } catch (error) {
        if (fallback) {
          try {
            const FallbackIconModule = await import(`lucide-react/dist/esm/icons/${fallback}.js`);
            setIcon(() => FallbackIconModule.default);
          } catch (error) {
            console.error(`Failed to load fallback icon "${fallback}"`, error);
            setIcon(undefined);
          }
        } else {
          console.error(`Failed to load icon "${name}"`, error);
          setIcon(undefined);
        }
      }
    };

    loadIcon();
  }, [name, fallback]);

  if (!icon) return null;

  const IconComponent = icon;
  return <IconComponent {...props} />;
};

export default Icon;
