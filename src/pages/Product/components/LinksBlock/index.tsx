import { VFC, useMemo } from "react";
import {
  ETHERSCAN_ICON,
  OPENSEA_ICON,
  RARIBLE_ICON,
} from "../../../../constants/images";
import { Wrapper, Label, LinksWrapper, LinkItem, StyledLink } from "./style";

type Props = {
  etherScanLink: string;
  openSeaLink: string;
  raribleLink: string;
};

type LinkItemType = {
  icon: string;
  link: string;
  label: string;
};

const LinksBlock: VFC<Props> = (props) => {
  const { etherScanLink, openSeaLink, raribleLink } = props;

  const links: LinkItemType[] = useMemo(
    () => [
      {
        icon: ETHERSCAN_ICON,
        link: etherScanLink,
        label: "Etherscan",
      },
      {
        icon: OPENSEA_ICON,
        link: openSeaLink,
        label: "OpenSea",
      },
      {
        icon: RARIBLE_ICON,
        link: raribleLink,
        label: "Rarible",
      },
    ],
    [etherScanLink, openSeaLink, raribleLink]
  );

  return (
    <Wrapper>
      <Label>blockchain info</Label>
      <LinksWrapper>
        {links.map(({ icon, link, label }) => (
          <StyledLink key={link} href={link} target="_blank" rel="noreferrer">
            <LinkItem>
              <img src={icon} alt="#" />
              View on {label}
            </LinkItem>
          </StyledLink>
        ))}
      </LinksWrapper>
    </Wrapper>
  );
};

export default LinksBlock;
