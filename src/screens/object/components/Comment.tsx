import { createStyles, Text, Avatar, Group, TypographyStylesProvider, Paper, ActionIcon } from '@mantine/core';
import { ExclamationMark, Message } from 'tabler-icons-react';

const useStyles = createStyles(theme => ({
  comment: {
    padding: `${theme.spacing.lg}px ${theme.spacing.xl}px`,
  },

  body: {
    paddingLeft: 54,
    paddingTop: theme.spacing.sm,
    fontSize: theme.fontSizes.sm,
  },

  content: {
    '& > p:last-child': {
      marginBottom: 0,
    },
  },
}));

interface CommentHtmlProps {
  postedAt: string;
  body: string;
  author: {
    name: string;
    image: string;
  };
}

export function CommentHtml({ postedAt, body, author }: CommentHtmlProps) {
  const { classes } = useStyles();
  return (
    <Paper mt={8} withBorder radius="md" className={classes.comment}>
      <Group position={'apart'}>
        <Group>
          <Avatar src={author.image} alt={author.name} radius="xl" />
          <div>
            <Text size="sm">{author.name}</Text>
            <Text size="xs" color="dimmed">
              {postedAt}
            </Text>
          </div>
        </Group>
        <Group>
          <ActionIcon radius={'xl'}>
            <ExclamationMark />
          </ActionIcon>
          <ActionIcon radius={'xl'}>
            <Message />
          </ActionIcon>
        </Group>
      </Group>
      <TypographyStylesProvider className={classes.body}>
        <div className={classes.content} dangerouslySetInnerHTML={{ __html: body }} />
      </TypographyStylesProvider>
    </Paper>
  );
}
