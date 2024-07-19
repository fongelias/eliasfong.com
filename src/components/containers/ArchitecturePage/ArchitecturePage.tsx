import { FlexBox } from "components/presentational/FlexBox/FlexBox";
import { NAV_LINK_DIRECTION, NavLink } from "components/presentational/NavLink/NavLink";
import { LandingPagePath } from "../LandingPage/LandingPage";
import { ResumePagePath } from "../ResumePage/ResumePage";

import basicRag from 'assets/basic-rag.png';
import parameterComparison from 'assets/parameters-comparison.png';
import computeComparison from 'assets/compute-comparison.png';
import gptResponse from 'assets/gpt-response.png';
import ragIllustration from 'assets/rag-illustration.png';
import baseGraph from 'assets/base-graph.png';
import replicaGraph from 'assets/replica-graph.png';
import localArch from 'assets/local-arch.png';
import finalArch from 'assets/final-arch.png';
import bloomGraph from 'assets/bloom-visualisation-conversation-graph.png';
import neo4jConversationTrees from 'assets/neo4j-conversation-trees.png';
import neo4jConversationTree from 'assets/neo4j-conversation-tree.png';

import './ArchitecturePage.scss';


export const ArchitecturePagePath = "/arch";

export const ArchitecturePage = () => {
  return <>
    <FlexBox className="ArchitecturePage" justify="center">
      <NavLink text='try it out!' path={LandingPagePath} direction={NAV_LINK_DIRECTION.LEFT}/>
      <NavLink text='see the plaintext resume' path={ResumePagePath} direction={NAV_LINK_DIRECTION.RIGHT}/>
      <FlexBox className="ArchitecturePageInner" direction="column">
        <h1>What is replica?</h1>
        <p>Replica is a chatbot that uses AI to answer questions about Elias from his resume, as well as a few supplementary documents.</p>
        <h1>Motivation</h1>
        <p>Given a sufficiently powerful AI, one can potentially pass a full document alongside a chat history in order to create a chat interface.</p>
        <FlexBox justify="center">
          <img className="BasicRagImage" src={basicRag}/>
        </FlexBox>
        <p>However, this would rely on something the size of ChatGPT4o.</p>
        <p>Cost-wise, at the time of writing, using GPT4o programmatically costs 10x more than a smaller LLM such as Llama 3. This is a bargain, given that it has 1.76T parameters, compared to Llama3’s 8B— approximately 220x larger.</p>
        <FlexBox justify="center">
          <img className="ParameterComparisionImage" src={parameterComparison}/>
        </FlexBox>
        <p>For comparison, I can run Llama3 8B on my M1 mac and get answers on the order of seconds, whereas running something like GPT4o apparently requires 8 A100s, according to GPT4o itself:</p>
        <FlexBox justify="center">
          <img className="ComputeComparisionImage" src={computeComparison}/>
        </FlexBox>
        <FlexBox justify="center">
          <img className="GptResponseImage" src={gptResponse}/>
        </FlexBox>
        <p>This means that I can work with LLMs programmatically using resources that have no additional cost to me outside of electricity— making smaller LLMs more accessible to me. Additionally, given that I am relatively new to these technologies, having a model that I can run for free allows me to iterate without worrying about managing a budget (a lesson I had to learn quickly after blowing $25 running RAGAs a few times on an early design). </p>
        <p>It should also be noted that simply feeding an entire text over and over to GPT4o would not be a very useful learning opportunity— which is also the main goal of this project.</p>
        <h1>Design</h1>
        <h2>Operation</h2>
        <p>Replica is a RAG application, which is an established model of operation that involves using a retrieval step during some part of the prompting process in order to improve the performance of a language model.</p>
        <p>This works by encoding a corpus of text into vectors, which are loaded into a vector database, and are fetched when a user’s query appears to be sufficiently similar.</p>
        <FlexBox justify="center">
          <img className="RagIllustrationImage" src={ragIllustration}/>
        </FlexBox>
        <p>It is also built using graph-based self-prompting, which involves breaking down the goal of creating a conversational AI into multiple steps— particularly, Routing, Fallback, and Self-Correction.</p>
        <FlexBox justify="center">
          <img className="BaseGraphImage" src={baseGraph}/>
        </FlexBox>
        <p>Typical Corrective RAG applications use Web Search as a fallback when they cannot answer a question, but for the purposes of this application, we fallback to answering with “I don’t know”, and prevent the LLM from attempting to answer questions it may not have the context to answer.</p>
        <p>We also only check for groundedness in Self-Correction, to avoid additional expensive calls to the LLM.</p>
        <p>This is how the graph looks today:</p>
        <FlexBox justify="center">
          <img className="ReplicaGraphImage" src={replicaGraph}/>
        </FlexBox>
        <h2>Architecture</h2>
        <p>This application was built local-first, with the intention of maximizing iterations and the feedback from them. The original architecture used a python backend, a react frontend, Chroma as a vector database, and Neo4j as a graph database. </p>
        <FlexBox justify="center">
          <img className="LocalArchImage" src={localArch}/>
        </FlexBox>
        <p>Neo4j was chosen for the ability to retrieve the entire path a query takes through the RAG graph into a visual interface. Using Neo4j Bloom, you can visualize the entire database as this large graph:</p>
        <FlexBox justify="center">
          <img className="BloomGraphImage" src={bloomGraph}/>
        </FlexBox>
        <p>Which— when organized— is a series of subgraphs, each individually representing a conversation:</p>
        <FlexBox justify="center">
          <img className="Neo4jConversationTreesImage" src={neo4jConversationTrees}/>
        </FlexBox>
        <p>And finally, here is a closer look at a single conversation:</p>
        <FlexBox justify="center">
          <img className="Neo4jConversationTreeImage" src={neo4jConversationTree}/>
        </FlexBox>
        <p>However, at approximately $20 a month, it would have been the most expensive component in the application—alongside a constantly running EC2 instance to run Chroma— so both were exchanged for options more readily available on AWS.</p>
        <p>One of the key downsides to this was that the existing embedding model could no longer be used, as it exceeded the lambda size requirements, and would otherwise require paying for HuggingFace.</p>
        <p>And so, Chroma was replaced by Pinecone, and Neo4j by DynamoDB</p>
        <FlexBox justify="center">
          <img className="FinalArchImage" src={finalArch}/>
        </FlexBox>
        <h1>Next Steps</h1>
        <p>If you took any time to play with Replica, you’ll probably notice its slow response times and its occasional hallucinations. The prompts used in the RAG graph are only somewhat optimized, and perhaps even the number of nodes can be reduced.</p>
        <p>There are key points of failure in the model, such as the Routing step and Document Grading step which have a noticeably higher rate of failure, which can be substituted for a more powerful model (such as GPT4o)</p>
        <p>These are all signs of Replica being only in a proof of concept stage— and further improvements would involve quantitative analysis of key failure points, a development of a set of conversation based regression tests, and perhaps testing the removal/addition of specific prompts (for example, adding a step to improve the query for retrieval).</p>
        <p>There are certainly improvements that can be made to retrieval itself— namely the selection of embedding model and chunking methodology. The model selection was heavily motivated by accessibility rather than performance, and chunking can be improved with techniques such as RAPTOR to add contexts of different sizes and granularity.</p>
      </FlexBox>
    </FlexBox>
  </>
}