import { Container, Flex } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";
import { Contacts } from "@/components/Contacts";

import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

import { FaGithub } from "react-icons/fa";

import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  UserImage,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectAreaWrapperColumns,
  ProjectsAreaContent,
} from "./style";

export const Home = (): JSX.Element => {
  const gihubUrl = `https://github.com/${userData.githubUser}`;

  return (
    <main id="home">
      <Header>
        <Container>
          <HeaderContent>
              <Text as="h1" type="heading1" color="grey5">
              Olá, Eu sou Bruno {" "} 
                <Text as="span" type="heading1" color="brand1">
                Engenheiro de Software
                </Text> 
              </Text>
              <Text type="body1" color="grey2">
                Como {" "}
                <Text as="span" type="body1" color="brand1">
                  Desenvolvedor FullStack  
                </Text>
                {" "} e {" "}
                <Text as="span" type="body1" color="brand1">
                  Engenheiro de Software
                </Text>
                {" "},
                sou  {" "}
                <Text as="span" type="body1" color="brand1">
                  facsinado 
                </Text>
                {" "} por criar {" "} 
                <Text as="span" type="body1" color="brand1">
                  soluções criativas
                </Text> que unem o
                {" "}
                <Text as="span" type="body1" color="brand1">
                  Front-End
                </Text>
                ,{" "}
                <Text as="span" type="body1" color="brand1">
                  Back-End
                </Text> e  de forma
                {" "}
                <Text as="span" type="body1" color="brand1">
                Integrada
                </Text>  e 
                {" "}
                <Text as="span" type="body1" color="brand1">
                  eficiente
                </Text>
                .{" "}
                Minha
                {" "}
                <Text as="span" type="body1" color="brand1">
                  habilidade
                </Text> 
                {" "}
                <Text as="span" type="body1" color="brand1">
                  compreender
                </Text> 
                {" "}
                as
                {" "}
                <Text as="span" type="body1" color="brand1">
                  necessidades dos usuários 
                </Text>
                {" "}
                traduzi-las em 
                {" "}
                <Text as="span" type="body1" color="brand1">
                código robusto e escalável
                </Text> 
                {" "}
                me permite entregar 
                {" "}
                <Text as="span" type="body1" color="brand1">
                produtos de excelência.
                </Text>
                {" "}
                Além disso, entendo que o 
                {" "}
                <Text as="span" type="body1" color="brand1">
                estudo
                </Text>
                {" "}
                é uma 
                {" "}
                <Text as="span" type="body1" color="brand1">
                jornada contínua
                </Text> 
                {" "}
                pois
                {" "}
                a 
                {" "}
                <Text as="span" type="body1" color="brand1">
                tecnologia evolui constantemente.
                </Text> 
              </Text>
              
            <HeaderButtonsArea>
              <Button as="a" type="primary" href="#projects">
                Ver meus projetos
              </Button>
              <Button
                color="grey5"
                as="a"
                css={{ "&:hover": { color: "$grey1" } }}
                type="circle"
                target="_blank"
                href={gihubUrl}
              >
                <FaGithub />
              </Button>
            </HeaderButtonsArea>
            <StackCards>
              {stackData.map((stack, index) => (
                <Stack key={index} title={stack.title} icon={stack.img} />
              ))}
            </StackCards>
          </HeaderContent>
        </Container>
      </Header>
      <ProjectsArea id="projects">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as="h2" type="heading4" color="brand1">
                Meus projetos
              </Text>
              <Text as="p" type="body1" color="grey2">
                Alguns do meus {" "}
                <Text as="span" color="brand5">
                  projetos paralelos
                </Text>
              </Text>
              
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
      <Contacts />
    </main>
  );
};
