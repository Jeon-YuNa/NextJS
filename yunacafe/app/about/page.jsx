import Link from "next/link";
import { motion } from "framer-motion";
const AboutPage = () => {
  return (
    <>
      <Link href={"/menu"}>메뉴 바로가기</Link>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        whileInView={{ opacity: 1 }}
      >
        어바웃 페이지
      </motion.div>
    </>
  );
};
export default AboutPage;
