 import{
  useState,
  useEffect
} from 'react';
import {
  liff
} from '../lib/liff';

function useLiff({
  liffId
}) {
  const [loading,
    setLoading
  ] = useState(false);
  const [error, setError] = useState(null);
  const [profile, setProfile] = useState(null);
  const initLiff = async({
    liffId
  }) => { // 省略 }; const fetchProfile = async () => { // 省略 }; // 送信する内容を引数で受け取る const sendMessage
    = async({
      text
    }) => {
      setLoading(true);
      try { // LIFF APIのsendMessagesを実行 liff.sendMessages([{ type: 'text', text }]);
        console.log(`success send message: ${text}`);
      } catch (error) {
        console.log({
          error
        });
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    useEffect(() => {
      initLiff({
        liffId
      });
    }, [liffId]); // 修正 return { loading, error, fetchProfile, profile, sendMessage
  };
}
export default useLiff;
