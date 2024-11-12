import { collection, query, orderBy, limit, getDocs } from "firebase/firestore";
import db from "./firebaseClient";

/**
 * @description Firestore의 vulnerability 컬렉션에서 count 필드가 높은 순으로 6개의 문서를 가져오는 함수
 * @returns {Promise<Object[] | null>} 6개의 문서 데이터를 배열로 반환하거나, 문서가 없으면 빈 배열 반환
 */
async function fetchSimilarContentList() {
  // 'vulnerability' 컬렉션 참조 생성
  const vulnerabilityCollectionRef = collection(db, "vulnerability");

  // 'count' 필드를 기준으로 내림차순 정렬하고, 상위 6개 문서만 가져오는 쿼리
  const vulnerabilityQuery = query(
    vulnerabilityCollectionRef,
    orderBy("subtitle", "desc"),
    limit(6),
  );

  // Firestore에서 쿼리 실행
  const querySnapshot = await getDocs(vulnerabilityQuery);

  // 문서가 없을 경우 처리
  if (querySnapshot.empty) {
    console.log("문서를 찾을 수 없습니다!");
    return [];
  }

  // 문서 데이터를 배열로 반환
  const vulnerabilities = querySnapshot.docs.map((doc) => ({
    id: doc.id, // 문서 ID 포함
    ...doc.data(), // 문서 데이터
  }));

  return vulnerabilities;
}

export default fetchSimilarContentList;
