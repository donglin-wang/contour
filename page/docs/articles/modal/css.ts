import cornered from "/style/variant/modal/cornered.css?inline";
import headerFooterStyle from "/style/variant/modal/headerFooter.css?inline";
import innerScroll from "/style/variant/modal/innerScroll.css?inline";
import outerScroll from "/style/variant/modal/outerScroll.css?inline";
import responsiveStyle from "/style/variant/modal/responsive.css?inline";
import textModifiers from "/style/variant/text/modifier.css?inline";
import triggerIcon from "/style/variant/trigger/icon.css?inline";
import triggerModifiers from "/style/variant/trigger/modifiers.css?inline";

export default responsiveStyle +
    headerFooterStyle +
    triggerModifiers +
    cornered +
    triggerIcon +
    textModifiers +
    outerScroll +
    innerScroll;
