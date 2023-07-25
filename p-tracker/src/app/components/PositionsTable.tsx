import prisma from "../lib/prisma";

export const getStaticProps: GetStaticProps = async () => {
  const feed: any = await prisma.position.findMany({
    where: { userId: 1 },
    include: {
      transactions: true,
    },
  });
  return {
    props: { feed },
  };
};
