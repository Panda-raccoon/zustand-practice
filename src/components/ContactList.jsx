import React, { useState } from "react";
import usePhoneBookStore from "../stores/usePhoneBookStore";
import { Box, Paper } from "@mui/material";

const ContactList = () => {
  const { phoneBook, deleteContact } = usePhoneBookStore();
  console.log(phoneBook);

  // 검색어를 저장할 state
  const [searchKeyword, setSearchKeyword] = useState("");

  // 검색어로 필터링하기
  const filteredContacts = phoneBook.filter((item) => {
    return item.name.toLowerCase().includes(searchKeyword.toLowerCase());
  });

  return (
    <div>
      <h1>연락처 리스트</h1>

      {/* 리스트를 감싸는 박스 */}
      <Paper
        elevation={3}
        sx={{
          padding: 2,
          maxWidth: 500,
          margin: "16px auto 0 auto", // 가운데 정렬 ( 외우기 , 도저히 안돼,,,,)
        }}
      >
        {/* 검색 입력창 */}
        <input
          type="text"
          placeholder="이름으로 검색..."
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
        />
        {/* 검색된 연락처 보여주기 */}
        {filteredContacts.map((item) => (
          <Box
            key={item.id}
            sx={{
              padding: 1,
              marginBottom: 1,
              borderBottom: "1px solid #eee",
            }}
          >
            {/* 이름,전하번호,삭제버튼 있어욥욥 */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <p style={{ margin: 0 }}>{item.name}</p>
                <p style={{ margin: 0, marginTop: "4px" }}>
                  {item.phoneNumber}
                </p>
              </Box>
              <button onClick={() => deleteContact(item.id)}>삭제</button>
            </Box>
          </Box>
        ))}
      </Paper>
    </div>
  );
};

export default ContactList;
