import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import usePhoneBookStore from "../stores/usePhoneBookStore";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const { addContact } = usePhoneBookStore();
  const handleAddContact = () => {
    // 연락처 추가 로직 ( 여기서의 내용을 리스트에 보여줘야 해서 이때, zustand 로 상태관리 할거임)
    // 1. 연락처 저장 장소 => 배열 : phoneBook = []
    // 2. 연락처를 추가
    if (!name.trim() || !phoneNumber.trim()) return;
    // 연락처 추가
    addContact(name, phoneNumber);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
      <TextField
        id="name"
        label="이름"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        id="phone"
        label="전화번호"
        variant="outlined"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <Button variant="contained" size="large" onClick={handleAddContact}>
        추가
      </Button>
    </Box>
  );
};

export default ContactForm;

// zustand : 상태 관리 라이브러리
// 어떤 상태일때, 서로 공유하려고 하는 상태일때 쓰임.

// 강의내용
// 다른 컴포넌트에서도 전역적으로 쓰임 => 상태관리 store 에 만듦 (예: contactStore.js) => zustand
// 이 컴포넌트 내에서만 쓰임 => 그냥 useState 로 만듦
