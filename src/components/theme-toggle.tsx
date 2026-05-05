'use client';

import { Button } from '@heroui/button';
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@heroui/dropdown';
import { Laptop, MoonStar, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <Dropdown className='min-w-28'>
      <DropdownTrigger>
        <Button data-testid='theme-toggle' variant='bordered' isIconOnly>
          <Sun className='size-5 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90' />
          <MoonStar className='absolute size-5 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0' />
          <span className='sr-only'>Toggle theme</span>
        </Button>
      </DropdownTrigger>
      <DropdownMenu data-testid='theme-dropdown-content'>
        <DropdownItem
          key='theme-light'
          textValue='Light'
          data-testid='theme-light'
          onPress={() => {
            setTheme('light');
          }}
        >
          <div className='flex items-center gap-x-2'>
            <Sun className='size-5' />
            <span>Light</span>
          </div>
        </DropdownItem>
        <DropdownItem
          key='theme-dark'
          textValue='Dark'
          data-testid='theme-dark'
          onPress={() => {
            setTheme('dark');
          }}
        >
          <div className='flex items-center gap-x-2'>
            <MoonStar className='size-5' />
            <span>Dark</span>
          </div>
        </DropdownItem>
        <DropdownItem
          key='theme-system'
          textValue='System'
          data-testid='theme-system'
          onPress={() => {
            setTheme('system');
          }}
        >
          <div className='flex items-center gap-x-2'>
            <Laptop className='size-5' />
            <span>System</span>
          </div>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
