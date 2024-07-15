import { rem } from "@/utils/text"
import { fonts } from "@/styles/tokens"

export const typography = {
  h1Display: {
    fontSize: rem(50),
    lineHeight: 1.1,
    fontFamily: fonts.headingFontStack,
    letterSpacing: rem(-0.6),
  },

  h1: {
    fontSize: rem(42),
    lineHeight: 1.1,
    fontFamily: fonts.headingFontStack,
    letterSpacing: rem(-0.6),
  },

  h2: {
    fontSize: rem(36),
    lineHeight: 1.15,
    fontFamily: fonts.headingFontStack,
    letterSpacing: rem(-0.3),
  },

  h3: {
    fontSize: rem(30),
    lineHeight: 1.2,
    fontFamily: fonts.headingFontStack,
    letterSpacing: rem(-0.3),
  },

  h4: {
    fontSize: rem(24),
    lineHeight: 1.2,
    fontFamily: fonts.headingFontStack,
    letterSpacing: rem(-0.3),
  },

  h5: {
    fontSize: rem(20),
    lineHeight: 1.2,
    fontFamily: fonts.headingFontStack,
    letterSpacing: rem(-0.3),
  },

  h6: {
    fontSize: rem(16),
    lineHeight: 1.2,
    fontFamily: fonts.headingFontStack,
    letterSpacing: rem(-0.3),
  },
}
