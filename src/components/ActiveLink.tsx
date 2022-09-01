import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { IconProps, TrademarkRegistered } from "phosphor-react";

interface ActiveLinkProps extends LinkProps {
  activeClassName: string;
  name: string;
  icon?: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
}

export function ActiveLink({
  activeClassName,
  name,
  icon: Icon,
  ...rest
}: ActiveLinkProps) {
  const { asPath } = useRouter();

  const className = asPath === rest.href ? activeClassName : "";

  return (
    <Link {...rest} passHref>
      <a
        className={
          className +
          "font-medium text-sm flex items-center hover:text-green-600 transition-colors duration-100 ease-linear"
        }
      >
        {!!Icon && <Icon size={21} className="mr-1" />}
        {name}
      </a>
    </Link>
  );
}
