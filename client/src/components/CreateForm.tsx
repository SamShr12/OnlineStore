"use client"
import { TextInput, createStyles, rem } from "@mantine/core";
import { useState } from "react";

const useStyles = createStyles((theme, { floating }: { floating: boolean }) => ({
    root: {
      position: 'relative',
    },
  
    label: {
      position: 'absolute',
      zIndex: 2,
      top: rem(7),
      left: theme.spacing.sm,
      pointerEvents: 'none',
      color: floating
        ? theme.colorScheme === 'dark'
          ? theme.white
          : theme.white
        : theme.colorScheme === 'dark'
        ? theme.colors.dark[3]
        : theme.colors.gray[5],
      transition: 'transform 150ms ease, color 150ms ease, font-size 150ms ease',
      transform: floating ? `translate(-${theme.spacing.sm}, ${rem(-28)})` : 'none',
      fontSize: floating ? theme.fontSizes.xs : theme.fontSizes.xs,
      fontWeight: floating ? 700 : 400,
    },
  
    required: {
      transition: 'opacity 150ms ease',
      opacity: floating ? 1 : 0,
    },
  
    input: {
        background:"none",
        color:"#fff",
      '&::placeholder': {
        transition: 'color 150ms ease',
        color: !floating ? 'transparent' : undefined,
      },
    },
  }));
  
export default function CreateForm() {
    const [focused, setFocused] = useState(false);
    const [value, setValue] = useState('');
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');

    const { classes } = useStyles({ floating: value.trim().length !== 0 || focused });
  return (
    <form>
    
        <section className="grid-2 text-center">
        <div>
            <TextInput
                label="Product Name"
                placeholder="Enter product name..."
                required
                classNames={classes}
                value={value}
                onChange={(event) => setValue(event.currentTarget.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                mt="md"
                autoComplete="nope"
            />       
     </div>
            <div>
            <TextInput
                label="Product price"
                placeholder="Enter product price..."
                required
                classNames={classes}
                value={value1}
                onChange={(event) => setValue1(event.currentTarget.value)}
                onFocus={() => setFocused(false)}
                onBlur={() => setFocused(false)}
                mt="md"
                autoComplete="nope"
            /> 
            </div>
            <div>
            <TextInput
                label="Product category"
                placeholder="Enter product category..."
                required
                classNames={classes}
                value={value2}
                onChange={(event) => setValue2(event.currentTarget.value)}
                onFocus={() => setFocused(false)}
                onBlur={() => setFocused(false)}
                mt="md"
                autoComplete="nope"
            /> 
            </div>
            <div>
            <TextInput
                label="Product description"
                placeholder="Enter one word description..."
                required
                classNames={classes}
                value={value3}
                onChange={(event) => setValue3(event.currentTarget.value)}
                onFocus={() => setFocused(false)}
                onBlur={() => setFocused(false)}
                mt="md"
                autoComplete="nope"
            /> 
            </div>
            
        </section>
        <div className="text-center mt-5">
            <button type="submit" className="px-4 py-2 bg-[#47baef] font-[700] rounded-lg  hover:bg-[#47beaf]">Submit</button>
        </div>
    </form>
  )
}
