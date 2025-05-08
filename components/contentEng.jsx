import pic1 from "@/images/picture1.png"
import pic3 from '@/images/picture2.png'
import pic4 from '@/images/picture4.png'
import pic8 from '@/images/picture8.png'
import pic10 from '@/images/picture10.png'
import pic20 from '@/images/picture20.png'

const EngContent = [
    {
      id: 1,
      image: pic1,
      title:'1-Acute Otitis Media',
      subtitle:'',
      description:'Description: Acute otitis media (AOM) is a bacterial or viral infection of the middle ear, usually accompanying a URI. Although AOM can occur at any age, it is most common between ages 3 months and 3 yr. At this age, the eustachian tube is structurally and functionally immature; the angle of the eustachian tube is more horizontal; and the angle of the tensor veli palatini muscle and the cartilaginous eustachian tube renders the opening mechanism less efficient',
      symptoms:"include otalgia, often with systemic symptoms (Eg, fever, nausea, vomiting, diarrhea), especially in the very young.",
      diagnosis:"is based on otoscopy, usually is clinical. Except for fluid obtained during myringotomy, cultures are not generally done.",
      treatments: [
        "Analgesics",
        "Sometimes antibiotics",
        "Rarely myringotomy"
      ],
    },

    {
      id: 2,
      image: "",
      title:"2-Ludwig's Angina",
      subtitle:'',
      description:'Description Ludwig’s angina Is Submandibular space infection is acute cellulitis of the soft tissues below the mouth. Contributing factors may include poor dental hygiene, tooth extractions, and trauma (E.g, fractures of the mandible, lacerations of the floor of the mouth). Symptoms include pain, dysphagia, and potentially fatal airway obstruction. Diagnosis usually is clinical.',
      symptoms:"Early manifestations are pain in any involved teeth, with severe, tender, localized submental and sublingual induration. Board-like firmness of the floor of the mouth and brawny induration of the suprahyoid soft tissues may develop rapidly. Drooling, trismus, dysphagia, stridor caused by laryngeal edema, and elevation of the posterior tongue against the palate may be present. Fever, chills, and tachycardia are usually present as well. The condition can cause airway obstruction within hours and does so more often than do other neck infections",
      diagnosis:"The diagnosis usually is obvious. If not, CT is done.",
      treatments: [
        "Maintenance of airway patency",
        "Surgical incision and drainage",
        "Antibiotics active against oral flora"
      ],
    },
    {
      id: 3,
      image: pic3,
      title:'3-Sinusitis',
      subtitle:'',
      description:'Description -Sinusitis is inflammation of the paranasal sinuses due to viral, bacterial, or fungal infections or allergic reactions.',
      classification: [
        "Acute (completely resolved in < 30 days);",
        "Sub-acute (completely resolved in 30 to 90 days);",
        "Recurrent (multiple discrete acute episodes, each completely resolved in < 30 days but recurring in cycles, with at least 10 days between complete resolution of symptoms and initiation of a new episode); and",
        "Chronic (lasting > 90 days)."
      ],
      symptoms:"include nasal obstruction and congestion, purulent rhinorrhea, cough, facial pain, malaise, and sometimes fever.",
      diagnosis:"–clinical",
      treatments: [
        "is with antibiotics, such as amoxicillin, penicillin, erythromycin, or trimethoprim/ sulfamethoxazole, given for 12 to 14 days for acute sinusitis and for up to 6 wk. for chronic sinusitis. \nDecongestants and application of heat and humidity may help relieve symptoms and improve sinus drainage. \nRecurrent sinusitis may require surgery to improve sinus drainage.",
      ]
    },
    {
      id: 4,
      image: pic4,
      title:'4-Tonsillopharyngitis',
      subtitle:'',
      description:'Description Tonsillopharyngitis is acute infection of the pharynx, palatine tonsils, or both. It is usually viral, most often caused by the common cold viruses (adenovirus, rhinovirus, influenza, coronavirus, respiratory syncytial virus), but occasionally by Epstein-Barr virus, herpes simplex virus, cytomegalovirus, or HIV. In about 30% of patients, the cause is bacterial. Group Aβ-hemolytic streptococcus (GABHS) is most common',
      symptoms:"may include sore throat, dysphagia, cervical lymphadenopathy, and fever. Pain with swallowing is the hallmark and is often referred to the ears. Very young children who are not able to complain of sore throat often refuse to eat. High fever, malaise, headache, and GI upset are common, as are halitosis and a muffled voice. The tonsils are swollen and red and often have purulent exudates. Tender cervical lymphadenopathy may be present. Fever, adenopathy, palatal petechiae, and exudates are somewhat more common with GABHS than with viral tonsillopharyngitis",
      diagnosis:" is clinical, supplemented by culture or rapid antigen test.",
      treatments: [
        " *Treatment depends on symptoms and, in the case of group A β- hemolytic streptococcus, involves antibiotics.",
        "Symptomatic treatment",
        "Antibiotics for GABHS",
        "Tonsillectomy considered for recurrent GABHS",
      ],
    },
    {
      id:5,
      image: "",
      title:'5-Meningitis',
      subtitle:'',
      description:'Description Meningitis is inflammation of the meninges of the brain or spinal cord. Meningitis is often infectious and is one of the most common CNS infections. Inflammation involves both the meninges and brain parenchyma (meningoencephalitis). Meningitis may become evident over hours or days (acute) or a longer period (sub-acute or chronic).',
      classification:[
        "Acute bacterial meningitis - Acute bacterial meningitis is a severe illness characterized by purulent CSF. It is rapidly progressive and, without treatment, fatal. ",
        "Aseptic meningitis - Aseptic meningitis is milder and typically self-limited; it is usually caused by viruses",
      ],
      symptoms:"Many cases of infectious meningitis begin with a vague prodrome of viral symptoms. The classic meningitis triad of fever, headache, and nuchal rigidity develops over hours or days. Passive flexion of the neck is restricted and painful, but rotation and extension are typically not as painful. In severe cases, attempts at neck flexion may induce flexion of the hip or knee (Brudzinski's sign), and there may be resistance to passive extension of the knee while the hip is flexed (Kernig's sign). Neck stiffness and Brudzinski's and Kernig's signs are termed meningeal signs or meningismus; they occur because tension on nerve roots passing through inflamed meninges causes irritation. \n Although brain parenchyma is not typically involved early in meningitis, lethargy, confusion, seizures, and focal deficits will develop if bacterial meningitis is left untreated.",
      diagnosis:"• Blood DNAPCR for bacterial pathogens, • CSF analysis, • Sometimes CT before lumbar puncture",
      description2:"NB-Acute meningitis is a medical emergency that requires rapid diagnosis and treatment. After IV access is secured, blood samples are drawn for culture, CBC, and PCR of bacterial pathogens if available. Treatment is started empirically. Lumbar puncture is done to obtain CSF for Gram stain, culture, cell count and differential, glucose concentration, protein content and other specialized tests. These tests must be done in a timely manner. However, patients with signs compatible with a mass lesion (eg, focal deficits, papilledema, deterioration in consciousness, seizures) require head CT before lumbar puncture because there is a small possibility that lumbar puncture can cause cerebral herniation if a brain abscess or other mass lesion is present. CSF findings aid in the diagnosis of meningitis. /nPresence of bacteria on Gram stain or growth of bacteria in culture is diagnostic of bacterial meningitis. Gram stain is positive about 80% of the time in bacterial meningitis and usually differentiates among the common causative pathogens. CSF lymphocytosis and absence of pathogens suggest aseptic meningitis but may represent partially treated bacterial meningitis.",
      treatments: [
        "If patients appear ill and have findings of meningitis, antibiotics are started as soon as blood cultures are drawn. If patients do not appear very ill and the diagnosis is less certain, antibiotics can await CSF results and culture",
        
      ],
    },
    {
      id: 6,
      image: "",
      title:'6-Asthma',
      subtitle:'',
      description:'Description -Asthma is a disease of diffuse airway inflammation caused by a variety of triggering stimuli resulting in partially or completely reversible bronchoconstriction.',
      symptoms:" include dyspnea, chest tightness, cough, and wheezing",
      diagnosis:" is based on history, physical examination, and pulmonary function tests.",
      treatments: [
        " involves controlling triggering factors and drug therapy, most commonly with inhaled β2-agonists and inhaled corticosteroids.",
        
      ],
    },
    {
      id: 7,
      image: "",
      title:'7-Bronchitis',
      subtitle:'',
      description:'Description -Acute bronchitis is inflammation of the upper airways, commonly following a URI. The cause is usually a viral infection, though it is sometimes a bacterial infection; the pathogen is rarely identified.',
      symptoms:"-the most common is cough, with or without fever, and possibly sputum production. In patients with COPD, hemoptysis, burning chest pain, and hypoxemia may also occur.",
      diagnosis:"is based on clinical findings. Sometimes chest x-ray Diagnosis is based on clinical presentation. Chest x-ray is necessary only if findings suggest pneumonia",
      treatments: [
        "is supportive; antibiotics are necessary only for selected patients with chronic lung disease. Prognosis is excellent in patients without lung disease, but in patients with COPD, acute respiratory failure may result.",
        
      ],
    },
    {
      id: 8,
      image: pic8,
      title:'8-Heart failure',
      subtitle:'',
      description:'Heart failure (HF) is a syndrome of ventricular dysfunction. Left ventricular failure causes shortness of breath and fatigue, and right ventricular failure causes peripheral and abdominal fluid accumulation; the ventricles can be involved together or separately.',
      symptoms:"the most common symptoms are dyspnea, reflecting pulmonary congestion, and fatigue, reflecting low CO and generalized body swelling.",
      description2:"Dyspnea usually occurs during exertion and is relieved by rest. As HF worsens, dyspnea can occur during rest and at night, sometimes causing nocturnal cough. Dyspnea occurring immediately or soon after lying flat and relieved promptly by sitting up (orthopnea) is common as HF advances. In paroxysmal nocturnal dyspnea (PND), dyspnea awakens patients several hours after they lie down and is relieved only after they sit up for 15 to 20 min.",
      diagnosis:"is initially clinical, supported by chest x-ray, echocardiography, and levels of plasma natriuretic peptides.",
      treatments: [
        "Diuretics",
        "ACE Inhibitors",
        "Angiotensin Ii Receptor Blockers",
        "B-Blockers",
        "Aldosterone Antagonists",
        "Digitalis",
        "Specialized Implantable Pacemakers",
        "And Correction Of The Underlying Disorder."
      ],
    },
    {
      id: 9,
      image: "",
      title:'9-HTN',
      subtitle:'',
      description:'Description Hypertension is sustained elevation of resting systolic BP (≥ 140 mm Hg), diastolic BP (≥ 90 mm Hg), or both. /nHypertension with no known cause (primary; formerly, essential hypertension) is most common. Hypertension with an identified cause (secondary hypertension) is usually due to a renal disorder',
      symptoms:"Usually, no symptoms develop unless hypertension is severe or longstanding. Because of this reason even In the US, about 65 million people have hypertension but only about 70% of these people are aware that they have hypertension,",
      diagnosis:"is by sphygmomanometer. Tests may be done to determine cause, assess damage, and identify other cardiovascular risk factors.",
      treatments: [
        " involves lifestyle changes and drugs, including diuretics, β-blockers, ACE inhibitors, angiotensin II receptor blockers, and Ca channel blockers",
      ],
    },
    {
      id: 10,
      image: pic10,
      title:'10-Diabetic mellitus',
      subtitle:'',
      description:'Description-Diabetes Mellitus Diabetes mellitus (DM) is impaired insulin secretion and variable degrees of peripheral insulin resistance leading to hyperglycemia.',
      symptoms:"Early symptoms are related to hyperglycemia and include polydipsia, polyphagia, and polyuria. Later complications include vascular disease, peripheral neuropathy, and predisposition to infection.",
      diagnosis:"is by measuring plasma glucose.",
      treatments: [
        "Treatment is diet, exercise, and drugs that reduce glucose levels, including insulin and oral ant hyperglycemic drugs. Prognosis varies with degree of glucose control. There are 2 main categories of DM—type 1 and type 2, which can be distinguished by a combination of features. Terms that describe the age of onset (juvenile or adult) or type of treatment (insulin- or non-insulin- dependent) are no longer accurate because of overlap in age groups and treatments between disease types. /nImpaired glucose regulation is an intermediate, possibly transitional, state between normal glucose metabolism and DM that becomes common with age. It is a significant risk factor for DM and may be present for many years before onset of DM. It is associated with an increased risk of cardiovascular disease, but typical diabetic microvascular complications generally do not develop.",
      ],
    },
    {
      id: 11,
      image: "",
      title:'11-Anemia',
      subtitle:'',
      description:'Description Anemia is a decrease in the number of RBCs, HCT, or Hb content. The RBC mass represents the balance between production and destruction or loss of RBCs. Thus, anemia can result from one or more of 3 basic mechanisms.',
      classification:[
        "Blood loss",
        "Deficient erythropoiesis",
        "Excessive hemolysis (RBC destruction)"
      ],
      description2:"Blood loss can be acute or chronic. Anemia does not develop until several hours after acute blood loss, when interstitial fluid diffuses into the intravascular space and dilutes the remaining RBC mass. /nDuring the first few hours, however, levels of polymorphonuclear granulocytes, platelets, and, in severe hemorrhage, immature WBCs and normoblasts may rise. Chronic blood loss results in anemia if loss is more rapid than can be replaced or, more commonly, if accelerated erythropoiesis depletes body iron stores. /nDeficient erythropoiesis has myriad causes. Complete cessation of erythropoiesis results in a decline in RBCs of about 7 to 10% per week (1% per day). /nImpaired erythropoiesis, even if not sufficient to decrease the numbers of RBCs, often causes abnormal RBC size and shape. Excessive hemolysis can be caused by intrinsic abnormalities of RBCs or by extrinsic factors, such as the presence of antibodies on their surface that lead to their early destruction. An enlarged spleen sequesters and destroys RBCs more rapidly than normal. Some causes of hemolysis deform as well as destroy RBCs.",
      symptoms:"The symptoms of anemia are neither sensitive nor specific and do not help differentiate between types of anemia. Symptoms reflect compensatory responses to tissue hypoxia and usually develop when Hb falls to < 7 g/dL. However, they may develop at higher Hb levels in patients with limited cardiopulmonary reserve or in whom the anemia developed very rapidly. /nSymptoms such as weakness, seeing spots, fatigue, drowsiness, angina, syncope, and dyspnea on exertion can indicate anemia. Vertigo, headache, pulsatile tinnitus, amenorrhea, loss of libido, and GI complaints may also occur. /nHeart failure or shock can develop in patients with severe tissue hypoxia or hypovolemia. Certain symptoms may suggest the cause of the anemia. For example, melena, epistaxis, hematochezia, hematemesis, or menorrhagia indicates bleeding. Jaundice and dark urine, in the absence of liver disease, suggest hemolysis. Weight loss may suggest cancer. Diffuse severe bone or chest pain may suggest sickle cell disease, and stocking-glove paresthesias may suggest vitamin B12 or folate deficiency.",
      diagnosis:"•CBC with WBC and platelets /n•RBC indices and morphology /n•Reticulocyte count /n•Peripheral smear /n•Sometimes bone marrow aspiration and biopsy",
      description2:"Laboratory evaluation begins with a CBC, including WBC and platelet counts, RBC indices and morphology (MCV, MCH, MCHC, RBC volume distribution width [RDW]), and examination of the peripheral smear. Reticulocyte count demonstrates how well the bone marrow compensates for the anemia. Subsequent tests are selected  on  the  basis  of  these  results  and  on  the  clinical presentation. Recognition of general diagnostic patterns and symptomatology can expedite the diagnosis",
      treatments: [
        "When possible, the cause of the anemia should be identified and treatment should be directed towards treating the underlying cause./nBut despite the primary cause When the Hb falls dangerously low (eg, < 7 g/dL for patients without cardiopulmonary insufficiency or higher for patients with it), RBC transfusion temporarily increases O2-carrying capacity. RBC transfusion should be reserved for patients",
        "With or at high risk of cardiopulmonary symptoms",
        "With active, uncontrollable blood loss",
        "With some form of hypoxic or ischemic end-organ failure (Eg, neurologic ischemic symptoms, angina, tachycardia in patients with underlying heart failure or severe COPD)"
      ],
    },
    {
      id: 12,
      image: "",
      title:'12-Obesity',
      subtitle:'',
      description:'Obesity is excess body fat; consequences depend not only on the absolute amount but also on the distribution of the fat.',
      symptoms:"include cardiovascular disorders, diabetes mellitus, many cancers, cholelithiasis, fatty liver and cirrhosis, osteoarthritis, reproductive disorders in men and women, psychological disorders, and premature death.",
      diagnosis:"is based on body mass index (BMI—calculated from height and weight) and waist circumference. Blood pressure, fasting plasma glucose and lipid levels should be measured.",
      treatments: [
        "includes physical activity, dietary and behavioral modification, and sometimes drugs or surgery.",
        
      ],
    },
    {
      id: 13,
      image: "",
      title:'13-CLD (Cirrhosis)',
      subtitle:'',
      description:'Description Cirrhosis is a late stage of hepatic fibrosis that has resulted in widespread distortion of normal hepatic architecture. Cirrhosis is characterized by regenerative nodules surrounded by dense fibrotic tissue. Cirrhosis is a leading cause of death worldwide. The causes of cirrhosis are in developed countries, most cases result from chronic alcohol abuse or chronic hepatitis C. In parts of Asia and Africa, cirrhosis often results from chronic hepatitis B',
      symptoms:" may not develop for years and are often nonspecific (eg, anorexia, fatigue, weight loss). Late manifestations include portal hypertension, ascites, and, when decompensation occurs, liver failure",
      diagnosis:"clinical presentation of the patient and liver function tests are required for the diagnosis of CLD but definitive diagnosis often requires liver biopsy.",
      treatments: [
        "is supportive, Cirrhosis is usually considered irreversible.",
        
      ],
    },
    {
      id: 14,
      image: "",
      title:'14-Diarrhea',
      subtitle:'',
      description:'Description - Gastroenteritis is inflammation of the lining of the stomach and small and large intestines. Most cases are infectious the common etiologies include rotavirus and norovirus, although gastroenteritis may occur after ingestion of drugs and chemical toxins (e.g., metals, plant substances)./nGastroenteritis is usually uncomfortable but self-limited. Electrolyte and fluid loss is usually little more than an inconvenience to an otherwise healthy adult but can be grave for people who are very young, elderly, or debilitated or who have serious concomitant illnesses. Worldwide, an estimated 3 to 6 million children die each year from infectious gastroenteritis.',
      symptoms:"nclude anorexia, nausea, vomiting, diarrhea, and abdominal discomfort.",
      diagnosis:"is clinical or by stool culture, although immunoassays are increasingly used.",
      treatments: [
        "is symptomatic with fluid and electrolyte replacement, although parasitic and some bacterial infections require specific anti-infective therapy like cotrimoxazole, ciprofloxine",
        
      ],
    },
    {
      id: 15,
      image: "",
      title:'15-Appendicitis',
      subtitle:'',
      description:'Description /nAppendicitis is acute inflammation of the vermiform appendix, typically resulting in abdominal pain, anorexia, and abdominal tenderness. In the US, acute appendicitis is the most common cause of acute abdominal pain requiring surgery. Over 5% of the population develops appendicitis at some point. It most commonly occurs in the teens and 20s but may occur at any age. /nAppendicitis is thought to result from obstruction of the appendiceal lumen, typically by lymphoid hyperplasia, but occasionally by a fecalith, foreign body, or even worms. The obstruction leads to distention, bacterial overgrowth, ischemia, and inflammation',
      symptoms:"The classic symptoms of acute appendicitis are epigastric or periumbilical pain followed by brief nausea, vomiting, and anorexia; after a few hours, the pain shifts to the right lower quadrant. Pain increases with cough and motion./nClassic signs are right lower quadrant direct and rebound tenderness located at McBurney's point (junction of the middle and outer thirds of the line joining the umbilicus to the anterior superior spine)./nAdditional signs are pain felt in the right lower quadrant with palpation of the left lower quadrant (Rovsing sign), an increase in pain from passive extension of the right hip joint that stretches the iliopsoas muscle (psoas sign), or pain caused by passive internal rotation of the flexed thigh (obturator sign). Low-grade fever (rectal temperature 37.7 to 38.3° C) is common.",
      diagnosis:"Clinical evaluation /nAbdominal CT if necessary /nUltrasound an option to CT",
      treatments: [
        "Surgical removal ( laparoscopic or open)",
        "IV fluids and antibiotics",
        
      ],
    },
    {
      id: 16,
      image: "",
      title:'16-Gastritis',
      subtitle:'',
      description:'Description Gastritis is inflammation of the gastric mucosa caused by any of several conditions, including infection (Helicobacter pylori), drugs (NSAIDs, alcohol), stress, and autoimmune phenomena (atrophic gastritis).',
      description2:'Gastritis is classified based on the severity of mucosal injury as, Erosive, Non-erosive. /nIt is also classified according to the site of involvement as: Cardial, Body, Antrum. /nIt can also be further classified based on the inflammatory cell type as: acute, chronic',
      symptoms:"Many cases are asymptomatic, but dyspepsia and GI bleeding sometimes occur.",
      diagnosis:"is clinical and by endoscopy.",
      treatments: [
        "H2 blockers like cimetidine , ranitidine",
        "Pump blockers like pantoprazole",
        "For h. Pylori	positive infection, triple therapy which is combination of two antibiotics and pump blockers"
      ],
    },
    {
      id: 17,
      image: "",
      title:'17-Ectopic pregnancy',
      subtitle:'',
      description:'Description Ectopic Pregnancy it is an abnormal pregnancy where by , implantation occurs in a site other than the endometrial lining of the uterine cavity— like in the fallopian tube, uterine cornua, cervix, ovary, or abdominal or pelvic cavity./nIncidence of ectopic pregnancy is about 2/100 diagnosed pregnancies./nEctopic pregnancies cannot be carried to term and eventually rupture or involute',
      symptoms:"include pelvic pain, vaginal bleeding, and cervical motion tenderness. Syncope or hemorrhagic shock can occur with rupture.",
      diagnosis:"is by measurement of the β subunit of human chorionic gonadotropin and ultrasonography.",
      treatments: [
        "is with laparoscopic or open surgical resection or with IM methotrexate",
       
      ],
    },
    {
      id: 18,
      image: "",
      title:'18-Lung cancer (Bronchogenic carcinoma)',
      subtitle:'',
      description:'Description -Lung carcinoma is the leading cause of cancer-related death worldwide. About 85% of cases are related to cigarette smoking.',
      symptoms:" can include cough, chest discomfort or pain, weight loss, and, less commonly, hemoptysis; however, many patients present with metastatic disease without any clinical symptoms.",
      diagnosis:" is typically made by chest x-ray or CT scan and confirmed by biopsy. /nDespite advances in treatment, the prognosis remains poor, with only 15% of patients surviving > 5 yr from time of diagnosis. For patients with stage IV (metastatic) disease, the 5-yr overall survival rate is < 1%. Improving survival requires focusing attention on smoking cessation, early detection, and research into the genetic profile of lung tumors and developing novel forms of therapy.",
      treatments: [
        "-is Dependent on the stage of the disease and it includes",
        "Chemotherapy",
        "Surgery",
        "Radiation Therapy Or",
        "Combination of the above modalities of treatment"
      ],
    },
    {
      id: 19,
      image: "",
      title:'19-Breast cancer',
      subtitle:'',
      description:'Description -Breast cancer most often involves glandular breast cells in the ducts or lobules./nRisk factors	-	Family history of breast cancer, -Personal	history	of	previous	breast	pathology	like carcinoma in situ, -OCP, -Breast cancer gene, -Hormonal replacement therapy, -Early menarche, -Late menopause',
      symptoms:"-Most	patients	present	with	an	asymptomatic	lump discovered during examination or screening mammography.",
      diagnosis:" is confirmed by biopsy. But mammography is investigation of choice for early detection",
      treatments: [
        "Hormonal Therapy",
        "Chemotherapy,",
        "Surgical Excision Alone If Identified Early",
        "Radiation Therapy",
        "Combination Of 2 Or More Than Two Modalities Of Treatment"
      ],
    },
    {
      id: 20,
      image: pic20,
      title:'Combination Of 2 Or More Than Two Modalities Of Treatment',
      subtitle:'',
      description:'Description-Intracranial tumors may involve the brain or other structures (e.g., cranial nerves, meninges). The tumors usually develop during early or middle adulthood but may develop at any age; they are becoming more common among the elderly. Brain tumors are found in about 2% of routine autopsies. Some tumors are benign, but because the cranial vault allows no room for expansion, even these tumors can be serious.',
      classification:[
        "Primary tumor originated from the brain itself subdivided as /n o Parenchymal /n o Extra-neural",
        "Secondary tumor metastasizes from other organs of the Body"
      ],
      symptoms:"Many symptoms result from increased intracranial pressure which includes: •Headache, •Deterioration in mental status, •Focal brain dysfunction",
      description2: "The focal neurological manifestations of differ sorts are caused by effects of the tumor which may result from the following: /n-Invasion and destruction of brain tissu/n-Direct compression of adjacent tissue/n-Increased intracranial pressure/n-Bleeding within or outside the tumor/n-Cerebral edema/n-Obstruction of Dural venous sinuses (especially by bone or extradural metastatic tumors)/n-Obstruction of CSF drainage/n-Obstruction of CSF absorption (e.g., when leukemia or carcinoma involves the meninges)/n-Obstruction of arterial flow/n-Rarely, paraneoplastic syndromes",
      diagnosis:"T1-weighted MRI with gadolinium, /nCT with contrast /nEarly-stage brain tumors are often misdiagnosed. A brain tumor should be considered in patients with any of the following, Progressive focal or global deficits of brain function, New seizures, Persistent, unexplained, recent-onset headaches, particularly if worsened by sleep",
      treatments: [
        "Airway protection",
        "Dexamethasone for increased intracranial pressure",
        "Mannitol for herniation",
        "Definitive therapy with excision, radiation therapy, chemotherapy,",
        "Patients in a coma or with impaired airway reflexes require endotracheal intubation.",
        "Brain herniation due to tumors is treated with Mannitol 25 to 100 g infused IV, a corticosteroid (e.g, Dexamethasone 16 mg IV, followed by 4 mg PO or IV q 6 h), and endotracheal intubation.",
        "Mass lesions should be surgically decompressed as soon as possible",
        
      ],
    },
]
 
export default EngContent;