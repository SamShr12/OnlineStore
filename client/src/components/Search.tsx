import axios from '@/api/axios';
import { SpotlightProvider, SpotlightAction, SpotlightActionProps, spotlight  } from '@mantine/spotlight';
import { useEffect, useState } from 'react';
import { createStyles, UnstyledButton, Group, Text, Image, Center, Badge, rem } from '@mantine/core';

interface StoreData {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
  }
  
  const useStyles = createStyles((theme) => ({
    action: {
      position: 'relative',
      display: 'block',
      width: '100%',
      padding: `${rem(10)} ${rem(12)}`,
      borderRadius: theme.radius.sm,
      ...theme.fn.hover({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[1],
      }),
  
      '&[data-hovered]': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[1],
      },
    },
  }));

export default function Search() {
    const [query, setQuery] = useState('');
    const [products, setProducts] = useState<StoreData[]>([]);
    const actions: SpotlightAction[] = products.map(el => ({
        title:el.title,
        description:el.description,
        price:el.price,
        category:el.category,
        onTrigger: () => {}
    }));

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      try {
        const response = await axios.get<StoreData[]>('https://fakestoreapi.com/products', { signal });
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();

    return () => {
      console.log("cancelled");
      controller.abort();
    };
  }, []);
  


  return (
    <SpotlightProvider
    actions={actions}
    actionComponent={CustomAction}
    searchPlaceholder="Search..."
    shortcut="shift + I"
  >
    <button onClick={spotlight.open}>Search</button>
  </SpotlightProvider>
  )
}


function CustomAction({
    action,
    styles,
    classNames,
    hovered,
    onTrigger,
    ...others
  }: SpotlightActionProps) {
    const { classes } = useStyles(null, { styles, classNames, name: 'Spotlight' });
  
    return (
      <UnstyledButton
        className={classes.action}
        data-hovered={hovered || undefined}
        tabIndex={-1}
        onMouseDown={(event) => event.preventDefault()}
        onClick={onTrigger}
        {...others}
      >
        <Group noWrap>
          {action.image && (
            <Center>
              <Image src={action.image} alt={action.title} width={50} height={50} />
            </Center>
          )}
  
          <div style={{ flex: 1 }}>
            <Text>{action.title}</Text>
  
            {action.price && (
              <Text color="dimmed" size="xs">
                ${action.price}
              </Text>
            )}
          </div>
  
          {action.new && <Badge>new</Badge>}
        </Group>
      </UnstyledButton>
    );
  }
  
  