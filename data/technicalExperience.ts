import { experiences, projects, researchExperience, skills } from "./portfolio";

export function normalizeTechnology(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

const aliases: Record<string, string[]> = {
  "Random Forest": ["random forests", "randomforest", "randomforestclassifier", "randomforestregressor", "random forest classifier", "random forest regressor", "RF"],
  "Scikit-Learn": ["scikit learn", "scikitlearn", "sklearn"],
  "PyTorch": ["torch"],
  "TensorFlow": ["tensor flow", "TF"],
  "PCA": ["principal component analysis"],
  "Logistic Regression": ["logisticregression"],
  "Isolation Forest": ["isolationforest"],
  "Hugging Face": ["huggingface"],
  "PySpark": ["py spark"],
  "Apache Spark": ["Spark"],
  "Kafka": ["Apache Kafka"],
  "Flink": ["Apache Flink"],
  "Airflow": ["Apache Airflow"],
  "dbt": ["data build tool"],
  "ETL / ELT": ["ETL", "ELT"],
  "S3": ["AWS S3", "Amazon S3", "simple storage service"],
  "Lambda": ["AWS Lambda", "Amazon Lambda"],
  "EC2": ["AWS EC2", "Amazon EC2", "elastic compute cloud"],
  "Glue": ["AWS Glue"],
  "SageMaker": ["AWS SageMaker", "Amazon SageMaker"],
  "CloudWatch": ["AWS CloudWatch", "Amazon CloudWatch", "cloud watch"],
  "Redshift": ["AWS Redshift", "Amazon Redshift"],
  "BigQuery": ["Google BigQuery", "GCP BigQuery", "big query"],
  "Azure ML": ["Azure Machine Learning", "Microsoft Azure ML"],
  "GCP": ["Google Cloud", "Google Cloud Platform"],
  "AWS": ["Amazon Web Services"],
  "PostgreSQL": ["Postgres", "Postgre SQL"],
  "SQL Server": ["Microsoft SQL Server", "MSSQL"],
  "Kubernetes": ["K8s"],
  "MLflow": ["ML flow"],
  "Power BI": ["PowerBI"],
  "RAG": ["retrieval augmented generation"],
  "LLMs": ["LLM", "large language models", "large language model"],
  "NVIDIA PhysicsNeMo": ["PhysicsNeMo", "Physics NeMo", "NVIDIA Physics NeMo"],
  "Fourier Neural Operators": ["Fourier Neural Operator", "FNO"],
  "Physics-Informed Neural Networks": ["PINN", "PINNs", "physics informed neural network"],
  "FAISS": ["Facebook AI Similarity Search"],
  "ChromaDB": ["Chroma", "Chroma DB"],
  "TypeScript": ["type script"],
  "JavaScript": ["java script"],
  "Next.js": ["NextJS", "next js"],
  "Node.js": ["NodeJS", "node js"]
};

export function canonicalTechnology(value: string) {
  const normalized = normalizeTechnology(value);
  return Object.entries(aliases).find(([name, alternatives]) =>
    [name, ...alternatives].some((term) => normalizeTechnology(term) === normalized)
  )?.[0] ?? value;
}

export function technologyEntities(value: string) {
  const name = canonicalTechnology(value);
  return [name, ...(aliases[name] ?? [])];
}

export function mentionsTechnology(text: string, entities: string[]) {
  const normalized = ` ${normalizeTechnology(text)} `;
  return entities.some((entity) => normalized.includes(` ${normalizeTechnology(entity)} `));
}

export const technicalEvidence = [
  {
    technology: "Random Forest",
    detail: "I used Scikit-Learn RandomForestRegressor for an RFM-based customer-value proxy and paired RandomForestClassifier models for treatment/control uplift in Subscription Value Brain.",
    sources: [
      "https://github.com/Shreevikas-BJ/subscription-value-brain/blob/main/src/models/train_clv.py",
      "https://github.com/Shreevikas-BJ/subscription-value-brain/blob/main/src/models/train_uplift.py"
    ]
  },
  {
    technology: "Random Forest",
    detail: "My Scikit-Learn Hands-On Guide trains RandomForestClassifier on the Telco Customer Churn dataset and evaluates predictions with accuracy, classification reports, and a confusion matrix.",
    sources: ["https://github.com/Shreevikas-BJ/scikitlearn-handson-guide/blob/main/Random-Forest/RandomForest.ipynb"]
  }
];

const allTools = [
  ...skills.flatMap((group) => group.items),
  ...projects.flatMap((project) => project.tech),
  ...experiences.flatMap((job) => job.tags),
  ...researchExperience.technologies
];

const uniqueTools = new Map(allTools.map((tool) => [normalizeTechnology(canonicalTechnology(tool)), canonicalTechnology(tool)]));

export const technologies = [...uniqueTools.values()].map((name) => {
  const matchesTool = (tool: string) => normalizeTechnology(canonicalTechnology(tool)) === normalizeTechnology(name);
  const projectExamples = projects.filter((project) => project.tech.some(matchesTool));
  const roleExamples = experiences.filter((job) => job.tags.some(matchesTool));
  const evidence = technicalEvidence.filter((item) => item.technology === name);
  const category = skills.find((group) => group.items.some(matchesTool))?.category ?? "Project technologies";
  const examples = [
    ...evidence.map((item) => `${item.detail} Evidence: ${item.sources.join("; ")}.`),
    ...roleExamples.map((job) => `Employment using ${name}: ${job.title} at ${job.company}. ${job.bullets.filter((bullet) => mentionsTechnology(bullet, technologyEntities(name))).slice(0, 2).join(" ")}`),
    ...projectExamples.slice(0, 2).map((project) => `Independent portfolio project using ${name} (not attributed to any employer): ${project.title}. ${project.summary} ${project.repoUrl ? `Repository: ${project.repoUrl}.` : ""}`),
    ...(researchExperience.technologies.some(matchesTool) ? [`Research: ${researchExperience.role} at ${researchExperience.organization}. ${researchExperience.highlights.join(" ")}`] : [])
  ];
  return {
    name,
    category,
    entities: technologyEntities(name),
    examples,
    content: `Hands-on experience: I have used ${name}. Capability: ${category}. ${examples.length ? examples.slice(0, 3).join(" ") : "A named project or role for this particular skill is not specified; do not invent one."}`
  };
});

type CapabilityComparison = { id: string; capability: string; alternatives: string[]; used: string[]; caveat: string; source: string };
const cloudComparisonSource = "https://docs.cloud.google.com/docs/get-started/aws-azure-gcp-service-comparison";

// These describe transferable capabilities, never additional hands-on experience.
export const capabilityComparisons: CapabilityComparison[] = [
  { id: "object-storage", capability: "object storage and data-lake ingestion", alternatives: ["Azure Blob Storage", "Azure Blob", "ADLS", "Azure Data Lake Storage", "Google Cloud Storage", "GCS"], used: ["S3"], caveat: "Storage APIs and identity controls differ between providers.", source: cloudComparisonSource },
  { id: "ml-platform", capability: "managed machine-learning training and deployment", alternatives: ["Vertex AI", "Google Vertex AI", "Azure Machine Learning", "Azure ML"], used: ["SageMaker", "Azure ML"], caveat: "Transferable ML lifecycle experience is not proof of using another provider's managed platform.", source: cloudComparisonSource },
  { id: "etl", capability: "data integration and ETL", alternatives: ["Azure Data Factory", "ADF", "Cloud Data Fusion", "Google Cloud Data Fusion"], used: ["Glue", "Airflow", "dbt"], caveat: "ETL, orchestration, and SQL transformation tools play different roles; they are not identical services.", source: cloudComparisonSource },
  { id: "spark", capability: "distributed Spark data processing", alternatives: ["Dataproc", "Google Cloud Dataproc", "Managed Service for Apache Spark", "HDInsight", "Azure HDInsight", "EMR", "Amazon EMR"], used: ["Databricks", "PySpark", "Apache Spark"], caveat: "Spark experience transfers, but platform administration and deployment APIs differ.", source: cloudComparisonSource },
  { id: "warehousing", capability: "SQL analytics and cloud data warehousing", alternatives: ["Azure Synapse", "Azure Synapse Analytics", "Microsoft Fabric", "Fabric Warehouse", "BigQuery"], used: ["Snowflake", "Redshift", "BigQuery"], caveat: "Comparable analytics workflows do not imply identical warehouse features or cloud operations.", source: cloudComparisonSource },
  { id: "stream-ingestion", capability: "event ingestion and streaming pipelines", alternatives: ["Azure Event Hubs", "Event Hubs", "Google Pub/Sub", "PubSub", "Pub/Sub", "Kinesis", "Kinesis Data Streams"], used: ["Kafka"], caveat: "Kafka and managed event services offer related ingestion patterns, not identical delivery guarantees or operations.", source: cloudComparisonSource },
  { id: "stream-processing", capability: "batch and stream data processing", alternatives: ["Google Dataflow", "GCP Dataflow", "Dataflow", "Azure Stream Analytics"], used: ["Flink", "Apache Spark", "PySpark"], caveat: "Related processing concepts do not establish experience with Apache Beam or the requested managed service.", source: cloudComparisonSource },
  { id: "orchestration", capability: "pipeline scheduling and workflow orchestration", alternatives: ["Cloud Composer", "Google Cloud Composer", "MWAA", "Managed Workflows for Apache Airflow", "Workflow Orchestration Manager"], used: ["Airflow"], caveat: "Airflow skills transfer, but managed-service configuration is provider-specific.", source: cloudComparisonSource },
  { id: "monitoring", capability: "model and application monitoring", alternatives: ["Azure Monitor", "Application Insights", "Google Cloud Monitoring", "Cloud Monitoring", "Google Cloud Logging"], used: ["CloudWatch", "Model Monitoring"], caveat: "Monitoring concepts are comparable; telemetry integrations and tracing features vary.", source: cloudComparisonSource },
  { id: "compute", capability: "cloud virtual-machine compute", alternatives: ["Azure Virtual Machines", "Azure VMs", "Google Compute Engine", "Compute Engine", "GCE"], used: ["EC2"], caveat: "Virtual-machine experience is transferable, not a claim of configuring the requested provider.", source: cloudComparisonSource },
  { id: "functions", capability: "serverless functions", alternatives: ["Azure Functions", "Google Cloud Functions", "Cloud Functions", "Cloud Run functions"], used: ["Lambda"], caveat: "Only Lambda is established here; a named Lambda project is not specified.", source: cloudComparisonSource },
  { id: "relational-database", capability: "relational database and SQL application workflows", alternatives: ["Amazon RDS", "RDS", "Amazon Aurora", "Aurora", "Cloud SQL", "Google Cloud SQL", "Azure SQL Database", "Azure Database for PostgreSQL"], used: ["PostgreSQL", "MySQL", "SQL Server", "Supabase"], caveat: "Database-engine experience does not establish administration of another provider's managed service.", source: cloudComparisonSource },
  { id: "containers", capability: "containerized applications and Kubernetes orchestration", alternatives: ["AKS", "Azure Kubernetes Service", "GKE", "Google Kubernetes Engine", "EKS", "Amazon EKS"], used: ["Kubernetes", "Docker"], caveat: "Container/Kubernetes experience is not proof of operating a named managed cluster service.", source: cloudComparisonSource },
  { id: "bi", capability: "business intelligence dashboards", alternatives: ["Looker", "Amazon QuickSight", "QuickSight"], used: ["Power BI", "Tableau"], caveat: "Dashboarding experience is comparable, not experience with the requested BI product.", source: cloudComparisonSource }
];

export const comparisonDocuments = capabilityComparisons.flatMap((comparison) => {
  const used = technologies.filter((tool) => comparison.used.includes(tool.name));
  const entities = comparison.alternatives.filter((name) => !technologies.some((tool) => tool.entities.some((entity) => normalizeTechnology(entity) === normalizeTechnology(name))));
  if (!used.length || !entities.length) return [];
  const examples = [...new Set(used.flatMap((tool) => tool.examples.slice(0, 2)))].slice(0, 3);
  return [{
    id: `comparison-${comparison.id}`,
    kind: "comparison",
    entities,
    searchText: `${entities.join(", ")}: ${comparison.capability}. Comparable experience: ${used.map((tool) => tool.name).join(", ")}.`,
    content: `Capability comparison for ${entities.join(", ")}: ${comparison.capability}. The requested services are not established as hands-on experience. My comparable hands-on tools: ${used.map((tool) => tool.name).join(", ")}. ${examples.length ? examples.join(" ") : "No named project or role for these particular tools is specified."} Comparison limit: ${comparison.caveat} Reference: ${comparison.source}.`
  }];
});
