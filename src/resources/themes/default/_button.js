import {
  transparent,
  white,
  themePrimary,
  themeAccent,
} from './colors';
import {
  fontSizeButton,
} from './dimens';

export default {
  Button: {
    activeOpacity: 0.8,
    backgroundColor: themePrimary,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 0,
    paddingBottom: 0,
    marginRight: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    ActivityIndicator: {
      marginLeft: 5,
      color: white,
    },
    Text: {
      alignItems: 'stretch',
      fontSize: fontSizeButton,
      fontWeight: '500',
      color: white,
      margin: 5,
    },
  },
  'Button[styleName=flat-primary]': {
    backgroundColor: themePrimary,
    ActivityIndicator: {
      color: white,
    },
  },
  'Button[styleName=flat-accent]': {
    backgroundColor: themeAccent,
    ActivityIndicator: {
      color: white,
    },
  },
  'Button[styleName=outline-primary]': {
    borderWidth: 1,
    borderColor: themePrimary,
    backgroundColor: transparent,
    ActivityIndicator: {
      color: themePrimary,
    },
    Text: {
      color: themePrimary,
    },
  },
  'Button[styleName=outline-accent]': {
    borderWidth: 1,
    borderColor: themeAccent,
    backgroundColor: transparent,
    ActivityIndicator: {
      color: themeAccent,
    },
    Text: {
      color: themeAccent,
    },
  },
  'Button[disabled=true]': {
    opacity: 0.4,
  },
  'Button[loading=true]': {
    opacity: 0.4,
  },
  'Button[size=mini]': {
    height: 30,
    Text: {
      fontSize: fontSizeButton - 4,
    },
  },
  'Button[size=small]': {
    height: 36,
    Text: {
      fontSize: fontSizeButton - 2,
    },
  },
  'Button[size=medium]': {
    height: 42,
    Text: {
      fontSize: fontSizeButton,
    },
  },
  'Button[size=large]': {
    height: 48,
    Text: {
      fontSize: fontSizeButton + 2,
    },
  },
  'Button[size=big]': {
    height: 54,
    Text: {
      fontSize: fontSizeButton + 4,
    },
  },
  'Button[rounded=true]': {
    borderRadius: 2,
  },
  'Button[rounded=false]': {
    borderRadius: 0,
  },
  'Button[fluid=true]': {
    flex: 1,
    marginRight: 0,
  },
};
