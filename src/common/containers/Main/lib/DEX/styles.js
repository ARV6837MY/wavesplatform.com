const styles = theme => ({
  root: {
    position: 'relative',
  },
  titleRow: {
    justifyContent: 'flex-end',
  },
  title: {
    position: 'relative',
    zIndex: 2,
  },
  article: {
    marginBottom: theme.spacing.unit * 4,
    position: 'relative',
    zIndex: 2,
  },
  imageWrapper: {
    position: 'relative',
    right: -20,
    margin: [theme.spacing.unit * 1, 0, theme.spacing.unit * 3],
  },
  image: {
    width: '100%',
  },
  [theme.mixins.atMedia('sm')]: {
    titleRow: {
      justifyContent: 'flex-start',
    },
    title: {
      marginBottom: theme.spacing.unit * 37,
    },
    imageWrapper: {
      position: 'absolute',
      top: -70,
      right: 100,
      width: '50%',
      zIndex: 1,
    },
    image: {
      width: '150%',
      height: '150%',
      top: -150,
      left: -10,
    },
  },
  [theme.mixins.atMedia('md')]: {
    imageWrapper: {
      right: 40,
    },
  },
  [theme.mixins.atMedia('lg')]: {
    image: {
      top: -180,
      left: -30,
    },
  },
});

export default styles;
