import { Button } from '@chakra-ui/button';
import { Input } from '@chakra-ui/input';
import { HStack } from '@chakra-ui/layout';
import { React, useState } from 'react';
import { nanoid } from 'nanoid';
import { useToast } from '@chakra-ui/toast';

const AddTodo = ({ addTodos }) => {
  const toast = useToast();

  const handleSubmit = e => {
    e.preventDefault();
    if (!content) {
      toast({
        title: 'No Content.',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    const todo = {
      id: nanoid(),
      body: content,
    };
    addTodos(todo);
    setContent('');
  };

  const [content, setContent] = useState('');

  return (
    <form onSubmit={handleSubmit}>
      <HStack mt={8}>
        <Input
          variant="filled"
          placeholder="Add Items"
          value={content}
          onChange={e => setContent(e.target.value)}
        />
        <Button colorScheme="blue" px={8} type="submit">
          Add Todo
        </Button>
      </HStack>
    </form>
  );
};

export default AddTodo;
