/**
 * MMMMM is a mobile app for Secure Scuttlebutt networks
 *
 * Copyright (C) 2017 Andre 'Staltz' Medeiros
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import {StyleSheet} from "react-native";
import {Dimensions} from "../../styles/dimens";
import {Palette} from "../../styles/palette";
import {Typography} from "../../styles/typography";

export const navigatorStyle = {
  navBarHidden: true,
  statusBarColor: Palette.brand.backgroundDarker,
};

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Palette.white,
  },

  header: {
    flexDirection: "row",
    backgroundColor: Palette.brand.background,
    minHeight: Dimensions.toolbarAndroidHeight,
  },

  headerIcon: {
    width: Dimensions.iconSizeNormal + Dimensions.horizontalSpaceBig * 2,
    height: Dimensions.iconSizeNormal + Dimensions.verticalSpaceNormal * 2,
    alignItems: "center",
    justifyContent: "center",
  },

  indicatorViewPager: {
    flex: 1,
    flexDirection: "column-reverse",
    backgroundColor: Palette.brand.backgroundDarker,
  },

  searchInput: {
    flex: 1,
    color: "white",
    fontSize: Typography.fontSizeNormal,
    fontFamily: Typography.fontFamilyReadableText,
  },

  pageContainer: {
    backgroundColor: Palette.brand.voidBackground,
    justifyContent: "center",
    alignItems: "center",
  },

  pagePlaceholder: {
    fontSize: Typography.fontSizeBig,
    fontFamily: Typography.fontFamilyReadableText,
    textAlign: "center",
  },
});

export const iconProps = {
  headerIcon: {
    size: Dimensions.iconSizeNormal,
    color: Palette.white,
  },

};
