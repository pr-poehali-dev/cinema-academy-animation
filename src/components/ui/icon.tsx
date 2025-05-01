
import * as React from "react"
import { icons } from "lucide-react"

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string
  size?: number | string
  fallback?: string
  color?: string
  className?: string
}

const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ name, fallback, color, size = 24, className = "", ...props }, ref) => {
    const LucideIcon = icons[name as keyof typeof icons] || (fallback ? icons[fallback as keyof typeof icons] : null)

    if (!LucideIcon) {
      console.warn(`Icon "${name}" not found and no fallback provided`)
      return null
    }

    return (
      <LucideIcon
        ref={ref}
        color={color}
        size={size}
        className={className}
        {...props}
      />
    )
  }
)

Icon.displayName = "Icon"

export default Icon
