import React, { useState } from "react";
import { Modal } from "react-native";
import {
  ModalButton,
  ModalContainer,
  ModalView,
  StyledInput,
  ModalAction,
  ModalActionGroup,
  ModalIcon,
  HeaderTitle,
} from "./../styles/appStyles";
import { AntDesign } from "@expo/vector-icons";

const InputModal = ({
  modalVisible,
  setModalVisible,
  handleAddTodo,
  todoToBeEdited,
  setTodoToBeEdited,
  todoInputValue,
  setTodoInputValue,
  handleEditTodo,
  todos,
}) => {
  const handleSubmit = () => {
    if (!todoToBeEdited) {
      handleAddTodo({
        title: todoInputValue,
        date: new Date().toUTCString(),
        key: `${
          (todos[todos.length - 1] &&
            parseInt(todos[todos.length - 1].key) + 1) ||
          1
        }`,
      });
    } else {
      handleEditTodo({
        title: todoInputValue,
        date: todoToBeEdited.date,
        key: todoToBeEdited.key,
      });
    }

    setTodoInputValue("");
  };

  const handleCloseModal = () => {
    setTodoInputValue("");
    setModalVisible(false);
    setTodoToBeEdited(null);
  };

  return (
    <>
      <ModalButton onPress={() => setModalVisible(true)} style={{backgroundColor:"purple"}}>
        <AntDesign name="plus" size={60} color={"lightblue"} style={{backgroundColor:'purple', borderRadius:200}}/>
      </ModalButton>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <ModalContainer>
          <ModalView>
            <ModalIcon>
              <HeaderTitle>Todos</HeaderTitle>
              <AntDesign name="edit" size={30} color={"pink"} />
            </ModalIcon>

            <StyledInput
              placeholder="Add a todo"
              placeholderTextColor={"green"}
              selectionColor={"yellow"}
              onChangeText={(text) => setTodoInputValue(text)}
              value={todoInputValue}
              autoFocus={true}
              onSubmitEditing={handleSubmit}
              style={{color:"green", textAlign:"center"}}
            />

            <ModalActionGroup>
              <ModalAction onPress={handleCloseModal} color="#332424">
                <AntDesign name="close" size={28} color={"black"} />
              </ModalAction>
              <ModalAction onPress={handleSubmit} color="#E6E6E6">
                <AntDesign name="check" size={28} color="#4D3636" />
              </ModalAction>
            </ModalActionGroup>
          </ModalView>
        </ModalContainer>
      </Modal>
    </>
  );
};

export default InputModal;