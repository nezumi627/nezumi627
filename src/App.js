// useStateを追加 import React, { useState } from 'react'; import useLiff from './hooks/useLiff'; // 自身のLIFF IDを設定 const liffId
= '1234567890-abcedfgh';

function App() { // 修正 const { loading, error, profile, fetchProfile, sendMessage } = useLiff({
  liffId
}); // メッセージのstateを追加 const [text, setText] = useState(''); if (loading) return
< p > ...loading < /p>; if (error) return < p > {
  error.message
} < /p>; return ( < div > < h1 > Hello LIFF < /h1> < section > < button onClick = {
  () => fetchProfile()
} > Get Profile < /button> {profile && ( < div > < p > UserID: {
  profile.userId
} < /p> < p > DisplayName: {
  profile.displayName
} < /p> < p > Picture: < br / > < img src = {
  profile.pictureUrl
}
height = "300"
width = "300" / > < /p> {profile.statusMessage && ( < p > StatusMessage: {
profile.statusMessage
} < /p> )} </div > )
} < /section> {/ * メッセージの入力域と送信ボタンを追加 * /} < section > < input onChange = {
  e => setText(e.target.value)
}
/> <button onClick={()=> sendMessage({ text })}>Send</button > < /section> < /div> ); } export default App;
